import { Greeter } from './greeter';
import { expect } from 'chai';
import 'mocha';

describe('Greeter class', () => {

  it('should greet Alessio', () => {
    const greet = new Greeter('Alessio');
    expect(greet.greet()).to.equal('Bonjour, Alessio!');
  });

});
