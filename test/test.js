'use strict';

const code = require('../main.js');
const expect = require('chai').expect;

describe('greeting', () => {

  //accepts only one argument
  it('should accept exactly one argument', () => {
    expect(code.greeting('Jennie', 'Aaron')).to.equal('Function accepts exactly one argument');
    expect(code.greeting()).to.equal('Function accepts exactly one argument');
  });

  //input is a string
  it('should take only a string as an input', () => {
    expect(code.greeting('Laura')).to.be.a('string');
    expect(code.greeting(9)).to.equal('Function accepts only string arguments');

  });

  //output is a string
  it('should return a string', () => {
    expect(code.greeting('Hannah')).to.be.a('string');
  });

  //output is expected string
  it('should display the greeting "Hello" concatenated with the name input', () => {
    expect(code.greeting('Aaron')).to.equal('Hello, Aaron');
  });

});

describe('reduce', () => {

  // * input is an array
  it('accepts only an array', () => {
    expect(code.reduce()).to.equal('unacceptable input');
    expect(code.reduce('hello')).to.equal('unacceptable input');
  });

  // * input array includes only integers
  it('input array includes only numbers', () => {
    expect(code.reduce([1, 2, 'hello'])).to.equal('array includes non-number');
    expect(code.reduce([{a: 1, b: 2}, {c: 4, d: 5}])).to.equal('array includes non-number');
  });

  // * output is an integer
  it('returns a number', () => {
    expect(code.reduce([1, 2, 3])).to.be.a('number');
    expect(typeof code.reduce([8, 2, 75])).to.not.equal('string');
    expect(typeof code.reduce([25, 54, 11])).to.not.equal('object');
  });

  // * output is a sum of all integers
  it('returns the sum of all elements in array', () => {
    expect(code.reduce([1, 2, 3])).to.equal(6);
    expect(code.reduce([100, 250, 450])).to.equal(800);
    expect(code.reduce([1, -2, 2])).to.equal(1);
  });
});
