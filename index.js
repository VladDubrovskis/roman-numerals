const convertToRoman = (input) => {
  const romanDigits = ['X', 'IX', 'V', 'IV', 'I'];
  const arabicDigits = [10, 9, 5, 4, 1];

  let remaining = input;
  const result = arabicDigits.reduce((accumulator, value, index) => {
    while(remaining >= value) {
      if(remaining - value > -1) {
        remaining = remaining - value;
        accumulator += romanDigits[index];
      }
    }
    return accumulator;
    }, '');

  return result;
}

module.exports = {
  convertToRoman
}