/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST types-and-vars.ts
 *
 */

import {TypesAndVars} from "./types-and-vars";
import chai = require("chai");
import "mocha";

chai.should();

describe("TypesAndVars", () =>
{

    it("All should be 368718", () =>
    {
        TypesAndVars.All().should.equal(368718);
    });

    it("Color should be 1", () =>
    {
        TypesAndVars.Color().should.equal(1);
    });

    it("String length should be 16", () =>
    {
        TypesAndVars.StrLength().should.equal(16);
    });

    it("Sentence should be tho one expected", () =>
    {
        TypesAndVars.Sentence().should.equal("Hi, my name is Alessio Saltarin. I am 47.");
    });

    it("Symbols should be equal to 6", () =>
    {
        TypesAndVars.Symbols().should.equal(6);
    });

});
