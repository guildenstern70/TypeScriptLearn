/**
 *
 *  TypeScript Learn
 *  (C) 2018-22 Alessio Saltarin
 *
 *  functional.ts
 *
 */

import { Point } from './simple-class';

/**
 * Function pattern
 */
export type Predicate = (p: Point) => boolean;

/**
 * Some functional programming examples
 */
export class Functional {
    private readonly points = [new Point(-5, 0), new Point(10, 200), new Point(20, 120), new Point(-10, 30)];

    /**
     *
     * Get Total Points with predicate function == true
     *
     * Usage:
     *
     * -- getTotalPoints( (p) => p.x < 0 )
     *
     * @param {Predicate} functor
     */
    public getTotalPoints(functor: Predicate): number {
        let totalPoints = 0;
        this.points.forEach(point => {
            if (functor(point)) {
                totalPoints += 1;
            }
        });
        return totalPoints;
    }

    /**
     *
     * Get all points with predicate function == true
     *
     * @param {Predicate} functor
     * @returns {Point[]}
     */
    public getSpecialPoints(functor: Predicate): Point[] {
        return this.points.filter(functor);
    }

    /**
     * Typical example of map + reduce (sum of arrays):
     * Get the sum of points' x extracted with predicate
     *
     * Map:
     * https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     *
     * Reduce:
     * https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
     *
     */
    public getReduced(functor: Predicate): number {
        const points = this.getSpecialPoints(functor);

        // 1. Map
        const xPoints: number[] = points.map(p => p.x);

        // 2. Reduce
        return xPoints.reduce((x1, x2) => x1 + x2, 0);
    }
}
