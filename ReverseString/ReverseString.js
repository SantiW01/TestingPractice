function reverseString(string) {
  let stringReversed = [];
  for (let i = string.length; i >= 0; i--) {
    stringReversed.push(string[i]);
  }
  stringReversed = stringReversed.join("");
  return stringReversed;
}

module.exports = reverseString;
