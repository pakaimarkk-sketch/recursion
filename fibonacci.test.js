const { fibs, fibsRec } = require("./fibonacci");

test("returns first 0 fibonacci numbers", () => {
  expect(fibs(0)).toEqual([]);
});

test("returns first 1 fibonacci number", () => {
  expect(fibs(1)).toEqual([0]);
});

test("returns first 2 fibonacci numbers", () => {
  expect(fibs(2)).toEqual([0, 1]);
});

test("returns first 6 fibonacci numbers", () => {
  expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
});

test("returns first 0 fibonacci numbers recursively", () => {
  expect(fibsRec(0)).toEqual([]);
});

test("returns first 1 fibonacci number recursively", () => {
  expect(fibsRec(1)).toEqual([0]);
});

test("returns first 2 fibonacci numbers recursively", () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});

test("returns first 6 fibonacci numbers recursively", () => {
  expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5]);
});
