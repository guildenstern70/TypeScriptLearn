/**
 *
 *  TypeScript Learn
 *  (C) 2018-22 Alessio Saltarin
 *
 *  collections.ts
 *
 */

import { Point } from './simple-class';

export class Collections {
    /**
     * Get sum of arrays
     *
     * @returns {number}
     * @constructor
     */
    public static Arrays(): number {
        const p1: Point = new Point(0, 1);
        const p2: Point = new Point(10, 20);

        const arrayOfObjects: Point[] = [];
        arrayOfObjects.push(p1);
        arrayOfObjects.push(p2);

        const array: number[] = [];
        let result = 0;

        array.push(Number(10));
        array.push(Number(11));
        array.push(Number(12));

        arrayOfObjects.forEach(point => {
            result += point.x;
        });

        array.forEach(value => {
            result += value;
        });

        return result;
    }

    /**
     * Tuples type
     *
     * @returns {number}
     * @constructor
     */
    public static Tuples(): number {
        const tuple: [string, number] = ['hello', 10];

        // Modify element
        tuple[1] = 20; // => ["hello", 20]

        // Add element (beware of type!)
        tuple.push(12); // => [ "hello", 20, 12 ] works well because it can be string or number, union type

        return tuple[0].length + tuple[1] + tuple.length; // 5 + 20 + 3 = 28
    }
}
