/**
 *
 *  TypeScript Learn
 *  (C) 2018-26 Alessio Saltarin
 *  MIT License (see LICENSE file)
 *
 *  TEST collections.ts
 *
 */

import { Collections } from './collections';

describe('Collections', () => {
    test('Arrays should be 43', () => {
        expect(Collections.Arrays()).toBe(43);
    });

    test('Tuples should be 28', () => {
        expect(Collections.Tuples()).toBe(28);
    });
});
