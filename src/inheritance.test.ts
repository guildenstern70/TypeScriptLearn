/**
 *
 *  TypeScript Learn
 *  (C) 2018-20 Alessio Saltarin
 *
 *  TEST inheritance.ts
 *
 */

import { Square } from './inheritance';

describe('Square', () => {
    test('should have perimeter of 40', () => {
        const sq1 = new Square(10);
        expect(sq1.perimeter()).toBe(40);
    });

    test('should have area of 100', () => {
        const sq2 = new Square(10);
        expect(sq2.area()).toBe(100);
    });
});
