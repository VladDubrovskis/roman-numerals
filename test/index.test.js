const index = require('../index');
const assert = require('assert');

describe('Roman numeral converter', () => {
  it('should convert numbers 1 to 20 to roman values', () => {
    const arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

    arabic.forEach((input, numberIndex) => {
      assert.equal(index.convertToRoman(input), roman[numberIndex]);
    });
  });

  it('should convert numbers I to XX to arabic values', () => {
    const arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
    roman.forEach((input, numberIndex) => {
      assert.equal(index.convertToArabic(input), arabic[numberIndex]);
    });
  });

});