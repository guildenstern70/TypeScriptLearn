/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST type-inference.ts
 *
 */

import { TypeInference } from './type-inference';

describe('Type Inference', () => {
    test('Type of 3 must be number', () => {
        expect(TypeInference.TypeOfNumber()).toBe('number');
    });

    test('Type of a point must be object', () => {
        expect(TypeInference.TypeOfObject()).toBe('object');
    });

    test('Name Type of a point must be Point', () => {
        expect(TypeInference.Reflection()).toBe('Point');
    });
});
