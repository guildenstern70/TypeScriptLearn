/**
 *
 *  TypeScript Learn
 *  (C) 2018-26 Alessio Saltarin
 *  MIT License (see LICENSE file)
 *
 *  async-await.ts
 *
 */

export interface User {
    id: number;
    name: string;
}

/**
 * Examples of Promises and async/await syntax in TypeScript
 */
export class AsyncAwait {
    /**
     * Creates a Promise that resolves with a value after a specified delay in milliseconds.
     *
     * @param value The value to resolve
     * @param delayMs Delay in milliseconds
     * @returns Promise resolving to the provided value
     */
    public static delay<T>(value: T, delayMs: number = 10): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (delayMs < 0) {
                reject(new Error('Delay must be non-negative'));
                return;
            }
            setTimeout(() => {
                resolve(value);
            }, delayMs);
        });
    }

    /**
     * Example of async function using await
     *
     * @param userId The ID of the user to fetch
     * @returns Promise resolving to a User object
     */
    public async getUser(userId: number): Promise<User> {
        if (userId <= 0) {
            throw new Error('Invalid user ID');
        }
        const name = await AsyncAwait.delay(`User ${userId}`, 10);
        return {
            id: userId,
            name,
        };
    }

    /**
     * Example of using async/await with multiple sequential promises
     *
     * @param a First number
     * @param b Second number
     * @returns Promise resolving to the sum of delayed numbers
     */
    public async sumAsync(a: number, b: number): Promise<number> {
        const valA = await AsyncAwait.delay(a, 10);
        const valB = await AsyncAwait.delay(b, 10);
        return valA + valB;
    }

    /**
     * Example of Promise.all with async/await for concurrent operations
     *
     * @param userIds List of user IDs
     * @returns Promise resolving to list of users
     */
    public async getAllUsers(userIds: number[]): Promise<User[]> {
        const promises = userIds.map((id) => this.getUser(id));
        return Promise.all(promises);
    }
}
