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
});
