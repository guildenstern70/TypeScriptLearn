/**
 *
 *  TypeScript Learn
 *  (C) 2018-26 Alessio Saltarin
 *  MIT License (see LICENSE file)
 *
 *  async-await.test.ts
 *
 */

import { AsyncAwait } from './async-await';

describe('AsyncAwait', () => {
    const asyncAwait = new AsyncAwait();

    test('should resolve promise with delay', () => {
        return AsyncAwait.delay('Hello Promise', 10).then((result) => {
            expect(result).toBe('Hello Promise');
        });
    });

    test('should reject promise on negative delay', async () => {
        await expect(AsyncAwait.delay('test', -1)).rejects.toThrow('Delay must be non-negative');
    });

    test('should fetch user using async/await', async () => {
        const user = await asyncAwait.getUser(42);
        expect(user).toEqual({ id: 42, name: 'User 42' });
    });

    test('should throw error for invalid user id', async () => {
        await expect(asyncAwait.getUser(0)).rejects.toThrow('Invalid user ID');
    });

    test('should calculate sum asynchronously using await', async () => {
        const sum = await asyncAwait.sumAsync(15, 27);
        expect(sum).toBe(42);
    });

    test('should fetch multiple users concurrently with Promise.all and async/await', async () => {
        const users = await asyncAwait.getAllUsers([1, 2, 3]);
        expect(users).toHaveLength(3);
        expect(users).toEqual([
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
            { id: 3, name: 'User 3' },
        ]);
    });
});
