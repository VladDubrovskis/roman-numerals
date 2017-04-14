const convertToRoman = (input) => {
  if(input === 1) {
    return 'I';
  } else {
    return input;
  }
}

module.exports = {
  convertToRoman
}