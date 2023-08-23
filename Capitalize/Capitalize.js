function capitalize(string) {
  let i = 0;
  const myRegex = /[\W \s_]/g;
  while (myRegex.test(string[i])) {
    myRegex.test(string[i]);
    i++;
  }
  let splitString = string.split("");
  splitString[i] = splitString[i].toUpperCase();
  string = splitString.join("");
  return string;
}

module.exports = capitalize;
