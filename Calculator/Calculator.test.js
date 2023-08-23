const Calculator = require("./Calculator");
test("2 + 2 should be equal 4", () => {
  expect(Calculator(2, "+", 2)).toBe(4);
});

test("2 - 2 should be equal 0", () => {
  expect(Calculator(2, "-", 2)).toBe(0);
});

test("2 * 2 should be equal 4", () => {
  expect(Calculator(2, "*", 2)).toBe(4);
});

test("2 / 2 should be equal 1", () => {
  expect(Calculator(2, "/", 2)).toBe(1);
});

test("Other string than operator should return null", () => {
  expect(Calculator(2, "a", 2)).toBeNull();
});
