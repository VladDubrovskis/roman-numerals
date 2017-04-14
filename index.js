// in theory, the following two collections can be extended to support number above 3999
// add the collection of the roman digits according to the rules from wikipedia
const romanDigits = ['X', 'IX', 'V', 'IV', 'I'];
// add the corresponding collection of the arabic numbers
const arabicDigits = [10, 9, 5, 4, 1];

const convertToRoman = (input) => {
  const output = arabicDigits.reduce((romanValue, arabicValue, index) => {
    // loop until the remaining value is larger or equal to the current arabic number
    while(input >= arabicValue) {
      input = input - arabicValue;
      romanValue = `${romanValue}${romanDigits[index]}`;
    }
    return romanValue;
  }, '');

  return output;
}

module.exports = {
  convertToRoman
}