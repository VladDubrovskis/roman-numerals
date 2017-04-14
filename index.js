// in theory, the following two collections can be extended to support number above 3999
// add the collection of the roman digits according to the rules from wikipedia
const romanDigits = ['X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I'];
// add the corresponding collection of the arabic numbers
const arabicDigits = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

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

const convertToArabic = (input) => {
  const output = romanDigits.reduce((arabicValue, romanValue, index) => {
    // create a new regex to match the roman numeral
    const romanDigitsExpression = new RegExp(`^(${romanValue})+$`, 'g');
    // check if we can find any occurences using the regex created
    const checkOccurences = input.match(romanDigitsExpression);
    if(checkOccurences) {
      input.replace(romanDigitsExpression, '');
      arabicValue = checkOccurences.pop().length / romanDigits[index].length * arabicDigits[index]
    }
    return arabicValue;
  }, 0);

  return output;
}

module.exports = {
  convertToRoman,
  convertToArabic
}