/**
 *
 *  TypeScript Learn
 *  (C) 2018-20 Alessio Saltarin
 *
 *  TEST interfaces.ts
 *
 */

import { Labeller } from './interfaces';

describe('Labeller', () => {
    test('should print label', () => {
        expect(Labeller.print()).toBe('10 (Size Object)');
    });
});
