/**
 *
 *  TypeScript Learn
 *  (C) 2018-20 Alessio Saltarin
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
