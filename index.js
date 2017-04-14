// in theory, the following two collections can be extended to support number above 3999
// add the collection of the roman digits according to the rules from wikipedia
const romanDigits = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
// add the corresponding collection of the arabic numbers
const arabicDigits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

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
  const output = romanDigits.reduceRight((arabicValue, romanValue, index) => {
    // create a new regex to match the roman numeral
    const romanDigitsExpression = new RegExp(`(${romanValue})+$`, 'g');
    // check if we can find any occurences using the regex created
    const checkOccurences = input.match(romanDigitsExpression);
    if(checkOccurences) {
      // remove the occurences 
      input = input.replace(romanDigitsExpression, '');
      // as we are matching a group of characters, e.g. III will be match as such, we need to work out how many occurences are matched
      // so we take the matches length, and divide it by the length of the roman value
      // e.g. III(3) divided by I(1) will mean 3 occurences
      const occurences = checkOccurences.pop().length / romanDigits[index].length;
      arabicValue = arabicValue + (occurences * arabicDigits[index])
    }
    return arabicValue;
  }, 0);

  return output;
}

module.exports = {
  convertToRoman,
  convertToArabic
}