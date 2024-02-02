/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  map-filter.ts
 *
 */

import { Point } from './simple-class';

/**
 * Functional MAP and FILTER
 */
export class MapFilter {
    private points: Point[] = [];

    constructor() {
        this.points.push(new Point(10, 20));
        this.points.push(new Point(15, 20));
        this.points.push(new Point(20, 10));
        this.points.push(new Point(25, 10));
        this.points.push(new Point(30, 10));
    }

    public getPointsWithYAtLeast(y: number): Point[] {
        return this.points.filter((p) => p.y >= y);
    }

    public getPointAtX(x: number): Point {
        return <Point>this.points.find((p) => p.x == x);
    }

    public mapPoints(transformX: number): Point[] {
        return this.points.map((p) => new Point(p.x * transformX, p.y));
    }
}
