const reverseString = require("./ReverseString");

test("String should appear reverse", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("String should not appear as same as the input", () => {
  expect(reverseString("Not reversed")).not.toBe("Not reversed");
});
