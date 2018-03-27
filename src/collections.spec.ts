/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  TEST collections.ts
 *
 */

import {Collections} from './collections';
import chai = require('chai');
import 'mocha';

chai.should();

describe('Collections', () =>
{

    it('Arrays should be 33', () =>
    {
        Collections.Arrays().should.equal(33);
    });

    it('Tuples should be 37', () =>
    {
        Collections.Tuples().should.equal(37);
    });


});
