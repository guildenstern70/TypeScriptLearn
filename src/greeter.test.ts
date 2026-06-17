/**
 *
 *  TypeScript Learn
 *  (C) 2018-26 Alessio Saltarin
 *  MIT License (see LICENSE file)
 *
 *  TEST greeter.ts
 *
 */

import { Greeter } from './greeter';

describe('Greeter class', () => {
    test('should greet Alessio', () => {
        const greet = new Greeter('Alessio');
        expect(greet.greet()).toBe('Bonjour, Alessio!');
    });
});
