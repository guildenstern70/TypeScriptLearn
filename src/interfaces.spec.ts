/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST interfaces.ts
 *
 */

import {Labeller} from "./interfaces";
import {expect} from "chai";
import "mocha";

describe("Labeller", () =>
{

    it("should print label", () =>
    {
        expect(Labeller.print()).to.equal("10 (Size Object)");
    });

});
