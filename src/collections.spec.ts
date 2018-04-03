/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST collections.ts
 *
 */

import chai = require("chai");
import {Collections} from "./collections";
import "mocha";

chai.should();

describe("Collections", () =>
{

    it("Arrays should be 43", () => {
        Collections.Arrays().should.equal(43);
    });

    it("Tuples should be 37", () => {
        Collections.Tuples().should.equal(37);
    });

});
