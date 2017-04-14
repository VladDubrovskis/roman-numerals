const index = require('../index');
const assert = require('assert');

describe('Roman numeral converter', () => {
  it('should convert numbers 1 to 10 to roman values', () => {
    const arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    arabic.forEach((input, numberIndex) => {
      assert.equal(index.convertToRoman(input), roman[numberIndex]);
    });
  });

  it('should convert numbers I to X to arabic values', () => {
    const arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    roman.forEach((input, numberIndex) => {
      assert.equal(index.convertToArabic(input), arabic[numberIndex]);
    });
  });

});