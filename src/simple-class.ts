/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  simple-class.ts
 *
 */

/**
 * Point class
 */
export class Point {
    public readonly x: number;  // Getter/Setters are not needed
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

    /**
     * Distance from origin
     *
     * @returns {number}
     */
    public distanceFromOrigin(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
