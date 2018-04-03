/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST loops.ts
 *
 */

import {Loops} from "./loops";

describe("Loops", () =>
{

    test("ForIn should be 3", () =>
    {
        expect(Loops.ForIn()).toBe(3);
    });

    test("Color should be 1", () =>
    {
        expect(Loops.ForOf()).toBe(15);
    });

    test("String length should be 16", () =>
    {
        expect(Loops.Iterator()).toBe(10);
    });

    test("Sentence should be the one expected", () =>
    {
        expect(Loops.NormalFor()).toBe(30);
    });

});
