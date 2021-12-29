namespace KafkaFlow.Client.Protocol.Streams
{
    using System;
    using System.Buffers.Binary;
    using System.Runtime.CompilerServices;
    using System.Text;
    using KafkaFlow.Client.Protocol.Messages;

    internal static class StreamReadExtensions
    {
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool ReadBoolean(this MemoryReader source) => source.ReadByte() != 0;

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static ErrorCode ReadErrorCode(this MemoryReader source) => (ErrorCode)source.ReadInt16();

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static short ReadInt16(this MemoryReader source)
        {
            return BinaryPrimitives.ReadInt16BigEndian(source.GetSpan(2));
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static int ReadInt32(this MemoryReader source)
        {
            return BinaryPrimitives.ReadInt32BigEndian(source.GetSpan(4));
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static long ReadInt64(this MemoryReader source)
        {
            return BinaryPrimitives.ReadInt64BigEndian(source.GetSpan(8));
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string ReadString(this MemoryReader source)
        {
            return source.ReadString(source.ReadInt16());
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string? ReadNullableString(this MemoryReader source)
        {
            return source.ReadNullableString(source.ReadInt16());
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string? ReadNullableString(this MemoryReader source, int size)
        {
            return size < 0 ? null : source.ReadString(size);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string ReadString(this MemoryReader source, int size)
        {
            return Encoding.UTF8.GetString(source.GetSpan(size));
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string? ReadCompactNullableString(this MemoryReader source)
        {
            var size = source.ReadUVarint();

            return size <= 0 ?
                null :
                source.ReadString(size - 1);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string ReadCompactString(this MemoryReader source)
        {
            return source.ReadString(source.ReadUVarint() - 1);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static byte[]? ReadCompactByteArray(this MemoryReader source)
        {
            var size = source.ReadUVarint();

            if (size <= 0)
            {
                return null;
            }

            return source.GetSpan(size - 1).ToArray();
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static TMessage ReadMessage<TMessage>(this MemoryReader source)
            where TMessage : class, IResponse, new()
        {
            var message = new TMessage();
            message.Read(source);
            return message;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static TMessage[] ReadArray<TMessage>(this MemoryReader source)
            where TMessage : class, IResponse, new() =>
            source.ReadArray<TMessage>(source.ReadInt32());

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static TMessage[] ReadCompactArray<TMessage>(this MemoryReader source)
            where TMessage : class, IResponse, new() =>
            source.ReadArray<TMessage>(source.ReadUVarint() - 1);

        public static TMessage[] ReadArray<TMessage>(this MemoryReader source, int count)
            where TMessage : class, IResponse, new()
        {
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(count), count, "The value should be greater or equal than 0");
            }

            if (count == 0)
            {
                return Array.Empty<TMessage>();
            }

            var result = new TMessage[count];

            for (var i = 0; i < count; i++)
            {
                result[i] = new TMessage();
                result[i].Read(source);
            }

            return result;
        }

        public static TaggedField[] ReadTaggedFields(this MemoryReader source)
        {
            var count = source.ReadUVarint();

            if (count == 0)
            {
                return Array.Empty<TaggedField>();
            }

            var result = new TaggedField[count];

            for (var i = 0; i < count; i++)
            {
                result[i] = new TaggedField();
                result[i].Read(source);
            }

            return result;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static int[] ReadInt32Array(this MemoryReader source) => source.ReadInt32Array(source.ReadInt32());

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static int[] ReadCompactInt32Array(this MemoryReader source) => source.ReadInt32Array(source.ReadUVarint() - 1);

        public static int[] ReadInt32Array(this MemoryReader source, int count)
        {
            if (count < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(count), count, "The value should be greater or equal than 0");
            }

            if (count == 0)
            {
                return Array.Empty<int>();
            }

            var result = new int[count];

            for (var i = 0; i < count; ++i)
            {
                result[i] = source.ReadInt32();
            }

            return result;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static int ReadVarint(this MemoryReader source)
        {
            var num = source.ReadUVarint();

            return (num >> 1) ^ -(num & 1);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static int ReadUVarint(this MemoryReader source) => source.ReadUVarint(out _);

        public static int ReadUVarint(this MemoryReader source, out int bytesRead)
        {
            const int endMask = 0b1000_0000;
            const int valueMask = 0b0111_1111;

            bytesRead = 0;

            var num = 0;
            var shift = 0;
            int current;

            do
            {
                current = source.ReadByte();

                if (++bytesRead > 4)
                {
                    throw new InvalidOperationException("The value is not a valid VARINT");
                }

                num |= (current & valueMask) << shift;
                shift += 7;
            } while ((current & endMask) != 0);

            return num;
        }
    }
}
