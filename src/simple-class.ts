/**
 *
 *  TypeScript Learn
 *  (C) 2018-20 Alessio Saltarin
 *
 *  simple-class.ts
 *
 */

/**
 * Point class
 */
export class Point {
    public readonly x: number;
    public readonly y: number;

    /**
     *
     * Point
     *
     * @param {number} xx Point x coordinate
     * @param {number} yy Point y coordinate
     */
    constructor(xx: number, yy: number) {
        this.x = xx;
        this.y = yy;
    }
}
