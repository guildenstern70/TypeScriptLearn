/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  functional-test.ts
 *
 */

import { Functional } from './functional';
import { Point } from './simple-class';

describe('Functional', () => {
    const functional = new Functional();

    test('Points with negative x must be 2', () => {
        const predicate = (point: Point) => point.x < 0;
        expect(functional.getTotalPoints(predicate)).toBe(2);
    });

    test('Sum of x points with positive x must be 30', () => {
        const predicate = (point: Point) => point.x >= 0;
        expect(functional.getReduced(predicate)).toBe(30);
    });
});
