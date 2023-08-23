const capitalize = require("./capitalize");

test("First letter is capitalize", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("First letter is capitalize", () => {
  expect(capitalize('!"#$%&/()=?¡_-:;´`+[]hello world')).not.toBe(
    '!"#$%&/()=?¡_-:;´`+[]hello world'
  );
});

test("First letter is capitalize", () => {
  expect(capitalize("!h!ello world")).toBe("!H!ello world");
});
