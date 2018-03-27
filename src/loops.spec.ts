/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST loops.ts
 *
 */

import {Loops} from './loops';
import chai = require('chai');
import 'mocha';

chai.should();

describe('Loops', () =>
{

    it('ForIn should be 3', () =>
    {
        Loops.ForIn().should.equal(3);
    });

    it('Color should be 1', () =>
    {
        Loops.ForOf().should.equal(15);
    });

    it('String length should be 16', () =>
    {
        Loops.Iterator().should.equal(10);
    });

    it('Sentence should be tho one expected', () =>
    {
        Loops.NormalFor().should.equal(30);
    });

});
