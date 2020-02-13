/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST collections.ts
 *
 */

import { Collections } from './collections';

describe('Collections', () => {
    test('Arrays should be 43', () => {
        expect(Collections.Arrays()).toBe(43);
    });

    test('Tuples should be 37', () => {
        expect(Collections.Tuples()).toBe(37);
    });
});
