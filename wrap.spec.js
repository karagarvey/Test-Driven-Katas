/* eslint-disable no-unused-expressions */
/* eslint-env mocha, chai */
'use strict';

const expect = require('chai').expect;
const wrap = require('./wrap');

describe('wrap', function() {
  it('is a function', function() {
    console.log(wrap);
    expect(typeof wrap).to.equal('function');
  });

  it('outputs a string', function() {
    expect(typeof wrap('something', 1)).to.equal('string')
  });

  it('places lines breaks no further apart than num given', function(){
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20).to.equal('Lorem ipsum dolor \nsit eu amet, elit na \nagna sem amet nulla \nvel purus ac ligula.'))
  })
});


