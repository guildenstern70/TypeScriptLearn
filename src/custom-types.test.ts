/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  custom-types.test.ts
 *
 */

import { CustomTypes } from "./custom-types";

describe('Custom type', () => {
    test('should work', () => {
        const customType = new CustomTypes();
        expect(customType.getUser().email).toBe('alessiosaltarin@gmail.com');
    });
});

