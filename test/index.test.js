const index = require('../index');
const assert = require('assert');

describe('Roman numeral converter', () => {
  it('should convert number 1', () => {
    assert.equal(index.convertToRoman(1), 'I');
  });
});