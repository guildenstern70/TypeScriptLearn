/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  simple-class.test.ts
 *
 */

import { Point } from './simple-class';

describe('Simple class', () => {
    test('should get point coordinates', () => {
        const point = new Point(15, 20);
        expect(point.y).toBe(20);
        expect(point.x).toBe(15);
    });

    test('should get distance from origin', () => {
        const point = new Point(15, 20);
        expect(point.distanceFromOrigin()).toBe(25);
    });
});
