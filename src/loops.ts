/**
 *
 *  TypeScript Learn
 *  (C) 2018-22 Alessio Saltarin
 *
 *  interfaces.ts
 *
 */

/**
 * Examples of loops
 */
export class Loops {
    /**
     *
     * Normal way of looping (80% of the times)
     *
     * @returns {number}
     * @constructor
     */
    public static Iterator(): number {
        let result = 0;
        const someArray = [1, 2, 3, 4];

        for (const entry of someArray) {
            result += entry;
        }

        return result;
    }

    /**
     *
     * Normal JavaScript iterator iterates on indexes!
     *
     * @returns {number}
     * @constructor
     */
    public static ForIn(): number {
        let result = 0;
        const list = [4, 5, 6];

        for (const i in list) {
            // "0", "1", "2",
            result += Number(i);
        }

        return result;
    }

    /**
     *
     * C-Style for loop
     *
     * @returns {number}
     * @constructor
     */
    public static NormalFor(): number {
        let result = 0;
        let i: number;

        for (i = 0; i <= 10; i += 2) {
            result += i;
        }

        return result;
    }
}
