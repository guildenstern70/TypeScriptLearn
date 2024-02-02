/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  map-filter.test.ts
 *
 */

import {MapFilter} from "./map-filter";


describe('MapFilter class', () => {
    test('should extract point with Y>18', () => {
        const pointsDb = new MapFilter();
        const points = pointsDb.getPointsWithYAtLeast(18);
        expect(points.length).toBe(2);
    });

    test('should extract point with X=30', () => {
        const pointsDb = new MapFilter();
        const point = pointsDb.getPointAtX(30);
        expect(point.y).toBe(10);
    });

    test('should map points with transform', () => {
        const pointsDb = new MapFilter();
        const points = pointsDb.mapPoints(2);
        let sum = 0;
        for (const p of points) {
            sum += (p.x + p.y)
        }
        expect(sum).toBe(270);
    });
});

