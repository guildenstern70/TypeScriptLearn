/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST inheritance.ts
 *
 */

import {Square} from "./inheritance";
import {expect} from "chai";

describe("Square", () =>
{

    it("should have perimeter of 40", () =>
    {
        const sq1 = new Square(10);
        expect(sq1.perimeter()).to.equal(40);
    });

    it("should have area of 100", () =>
    {
        const sq2 = new Square(10);
        expect(sq2.area()).to.equal(100);
    });

});
