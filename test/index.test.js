const index = require('../index');
const assert = require('assert');

describe('Roman numeral converter', () => {
  it('should convert number 1', () => {
  it('should convert numbers 1 to 10', () => {
    assert.equal(index.convertToRoman(1), 'I');
    assert.equal(index.convertToRoman(2), 'II');
    assert.equal(index.convertToRoman(3), 'III');
    assert.equal(index.convertToRoman(4), 'IV');
    assert.equal(index.convertToRoman(5), 'V');
    assert.equal(index.convertToRoman(6), 'VI');
    assert.equal(index.convertToRoman(7), 'VII');
    assert.equal(index.convertToRoman(8), 'VIII');
    assert.equal(index.convertToRoman(9), 'IX');
    assert.equal(index.convertToRoman(10), 'X');
  });
  });
});