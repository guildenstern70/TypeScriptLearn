/**
 *
 *  TypeScript Learn
 *  (C) 2018-21 Alessio Saltarin
 *
 *  TEST types-and-vars.ts
 *
 */

import { TypesAndVars } from './types-and-vars';

describe('TypesAndVars', () => {
    test('All should be 368718', () => {
        expect(TypesAndVars.All()).toBe(368718);
    });

    test('Color should be 1', () => {
        expect(TypesAndVars.Color()).toBe(1);
    });

    test('String length should be 16', () => {
        expect(TypesAndVars.StrLength()).toBe(16);
    });

    test('Sentence should be tho one expected', () => {
        expect(TypesAndVars.Sentence()).toBe('Hi, my name is Alessio Saltarin. I am 47.');
    });

    test('Symbols should be equal to 6', () => {
        expect(TypesAndVars.Symbols()).toBe(6);
    });
});
