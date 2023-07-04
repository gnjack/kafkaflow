using System;
using KafkaFlow.Producers;
using KafkaFlow.Sample.Dashboard;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = CreateHostBuilder(args)
    .Build();

var producer = host.Services.GetRequiredService<IProducerAccessor>()["producer"];

_ = host.RunAsync();

static IHostBuilder CreateHostBuilder(string[] args) =>
    Host
        .CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(
            webBuilder =>
            {
                webBuilder
                    .UseStartup<Startup>();
            });

while (true)
{
    var input = Console.ReadLine();

    var splitted = input.Split(" ");

    var count = int.Parse(splitted[0]);

    int? partition = null;

    if (splitted.Length > 1)
    {
        partition = int.Parse(splitted[1]);
    }

    for (int i = 0; i < count; i++)
    {
        _ = producer.ProduceAsync(Guid.NewGuid().ToString(), Array.Empty<byte>(), partition: partition);
    }
}
