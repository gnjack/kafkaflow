using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace KafkaFlow.Extensions;

internal static class ChannelExtensions
{
    public static async IAsyncEnumerable<T> ReadAllItemsAsync<T>(
        this ChannelReader<T> reader,
        [EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        while (await WaitToReadAsync(reader, cancellationToken))
        {
            while (reader.TryRead(out var item))
            {
                cancellationToken.ThrowIfCancellationRequested();
                yield return item;
            }
        }
    }

    private static async Task<bool> WaitToReadAsync<T>(ChannelReader<T> reader, CancellationToken cancellationToken)
    {
        await Task.Delay(10, cancellationToken);
        return await reader.WaitToReadAsync(cancellationToken);
    }
}
