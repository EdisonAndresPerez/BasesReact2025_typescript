import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("la funcion de sumar tiene que devolverme 3", () => {
    // ! 1. Arrange
    const a = 2;
    const b = 1;

    // ! 2. Act
    const resultAdd = add(a, b);
    console.log({ resultAdd });
    // 3. Assert
    expect(resultAdd).toBe(a + b);

    //if (result !== 2){
    //    throw new Error('El resultado no  es 2')
    //}
  });
});

describe("subtract", () => {
  test("La funcion de restar tiene que devolverme 3", () => {
    //Arrange
    const a = 5;
    const b = 2;
    //Act
    const resultSubtract = subtract(a, b);
    console.log({ resultSubtract });
    //Assert
    expect(resultSubtract).toBe(a - b);
  });

  test("La funcion de restar tiene que devolverme -2", () => {
    //Arrange
    const a = -3;
    const b = -1;
    //Act
    const resultNegative = subtract(a, b);
    console.log({ resultNegative });
    //Assert
    expect(resultNegative).toBe(a - b);
  });
});

describe("multiply", () => {
  test("la funcion de multiplicar tiene que devolverme 6", () => {
    const a = 3;
    const b = 2;

    const resultMultiply = multiply(a, b);
    console.log({ resultMultiply });

    expect(resultMultiply).toBe(a * b);
  });

test("la función de multiplicar tiene que devolverme -6", () => {
  const a = -3;
  const b = 2;
  const resultMultiplyNegative = multiply(a, b);
   console.log({ resultMultiplyNegative });
  expect(resultMultiplyNegative).toBe(a * b);
});
});
