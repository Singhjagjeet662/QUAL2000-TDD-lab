// imports
const { describe, it } = require("node:test");
const assert = require("assert");
const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");

describe("Math Functions Test Suite", () => {
  it("should add numbers correctly", () => {
    assert.strictEqual(add(3, 5), 8);
  });

  it("should subtract numbers correctly", () => {
    assert.strictEqual(subtract(5, 9), -4);
  });

  it("should multiply numbers correctly", () => {
    assert.strictEqual(multiply(12, 9), 108);
  });

  it("should divide numbers correctly", () => {
    assert.strictEqual(divide(55, 5), 11);
  });

  it("should throw an error when dividing by zero", () => {
    assert.throws(() => divide(5, 0), /Cannot divide by zero/);
  });

  it("should return modulus correctly", () => {
    assert.strictEqual(modulas(17, 4), 1);
  });

  it("should return power correctly", () => {
    assert.strictEqual(power(2, 5), 32);
  });

  it("should return square root correctly", () => {
    assert.strictEqual(squareRoot(25), 5);
  });

  it("should throw an error for square root of a negative number", () => {
    assert.throws(
      () => squareRoot(-1),
      /Cannot take square root of a negative number/
    );
  });

  it("should return floor value correctly", () => {
    assert.strictEqual(floor(15.3), 15);
  });

  it("should return ceiling value correctly", () => {
    assert.strictEqual(ceiling(15.3), 16);
  });
});
