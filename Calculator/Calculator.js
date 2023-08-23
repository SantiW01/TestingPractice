function Calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 > num2 ? num2 / num1 : num2 / num1;
    default:
      return null;
  }
}

module.exports = Calculator;
