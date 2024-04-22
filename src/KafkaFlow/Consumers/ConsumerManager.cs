using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using KafkaFlow.Configuration;

namespace KafkaFlow.Consumers;

internal class ConsumerManager : IConsumerManager
{
    private readonly IDependencyResolver _dependencyResolver;
    private readonly ILogHandler _logHandler;

    private CancellationTokenSource _stopTokenSource;
    private Task _evaluateWorkersTask;

    public ConsumerManager(
        IConsumer consumer,
        IConsumerWorkerPool consumerWorkerPool,
        IWorkerPoolFeeder feeder,
        IDependencyResolver dependencyResolver,
        ILogHandler logHandler)
    {
        _dependencyResolver = dependencyResolver;
        _logHandler = logHandler;
        this.Consumer = consumer;
        this.WorkerPool = consumerWorkerPool;
        this.Feeder = feeder;

        this.Consumer.OnPartitionsAssigned((_, _, partitions) =>
            Task.Run(() => this.OnPartitionAssigned(partitions)).Wait());
        this.Consumer.OnPartitionsRevoked((_, _, partitions) =>
            Task.Run(() => this.OnPartitionRevoked(partitions)).Wait());
    }

    public IWorkerPoolFeeder Feeder { get; }

    public IConsumerWorkerPool WorkerPool { get; }

    public IConsumer Consumer { get; }

    public Task StartAsync()
    {
        this.Feeder.Start();

        _stopTokenSource = new CancellationTokenSource();
        _evaluateWorkersTask = Task.Run(async () =>
        {
            while (!_stopTokenSource.IsCancellationRequested)
            {
                await Task.Delay(this.Consumer.Configuration.WorkersCountEvaluationInterval, _stopTokenSource.Token).ConfigureAwait(false);
                await this.EvaluateWorkersCountAsync().ConfigureAwait(false);
            }
        });

        return Task.CompletedTask;
    }

    public async Task StopAsync()
    {
        _stopTokenSource?.Cancel();
        _stopTokenSource?.Dispose();

        await this.Feeder.StopAsync().ConfigureAwait(false);
        await this.WorkerPool.StopAsync().ConfigureAwait(false);

        this.Consumer.Dispose();
    }

    private async Task EvaluateWorkersCountAsync()
    {
        var newWorkersCount = await this.CalculateWorkersCount(this.Consumer.Assignment).ConfigureAwait(false);

        if (newWorkersCount == this.WorkerPool.CurrentWorkersCount)
        {
            return;
        }

        await this.ChangeWorkersCountAsync(newWorkersCount).ConfigureAwait(false);
    }

    private async Task ChangeWorkersCountAsync(int workersCount)
    {
        try
        {
            await this.Feeder.StopAsync().ConfigureAwait(false);
            await this.WorkerPool.StopAsync().ConfigureAwait(false);

            await this.WorkerPool.StartAsync(this.Consumer.Assignment, workersCount).ConfigureAwait(false);
            this.Feeder.Start();
        }
        catch (Exception e)
        {
            _logHandler.Error("Error changing workers count", e, null);
        }
    }

    private Task OnPartitionRevoked(IEnumerable<Confluent.Kafka.TopicPartitionOffset> topicPartitions)
    {
        _logHandler.Warning(
            "Partitions revoked",
            this.GetConsumerLogInfo(topicPartitions.Select(x => x.TopicPartition)));

        return this.WorkerPool.StopAsync();
    }

    private async Task OnPartitionAssigned(IReadOnlyCollection<Confluent.Kafka.TopicPartition> partitions)
    {
        _logHandler.Info(
            "Partitions assigned",
            this.GetConsumerLogInfo(partitions));

        var workersCount = await this.CalculateWorkersCount(partitions).ConfigureAwait(false);

        await this.WorkerPool.StartAsync(partitions, workersCount).ConfigureAwait(false);
    }

    private object GetConsumerLogInfo(IEnumerable<Confluent.Kafka.TopicPartition> partitions) => new
    {
        this.Consumer.Configuration.GroupId,
        this.Consumer.Configuration.ConsumerName,
        Topics = partitions
            .GroupBy(x => x.Topic)
            .Select(
                x => new
                {
                    x.First().Topic,
                    PartitionsCount = x.Count(),
                    Partitions = x.Select(y => y.Partition.Value),
                }),
    };

    private async Task<int> CalculateWorkersCount(IEnumerable<Confluent.Kafka.TopicPartition> partitions)
    {
        try
        {
            return await this.Consumer.Configuration.WorkersCountCalculator(
                new WorkersCountContext(
                    this.Consumer.Configuration.ConsumerName,
                    this.Consumer.Configuration.GroupId,
                    partitions
                        .GroupBy(
                            x => x.Topic,
                            (topic, grouped) => new TopicPartitions(
                                topic,
                                grouped
                                    .Select(x => x.Partition.Value)
                                    .ToList()))
                        .ToList()),
                _dependencyResolver).ConfigureAwait(false);
        }
        catch (Exception e)
        {
            _logHandler.Error("Error calculating new workers count, using one worker as fallback", e, null);

            return 1;
        }
    }
}
