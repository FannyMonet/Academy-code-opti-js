import sumNumbers from "../src/sum";

describe("sum", () => {
  test("should sum numbers of an array", () => {
    // Given
    const numbers = [1, 2, 3, 4, 5];
    // When
    const sum = sumNumbers(numbers);
    // Then
    expect(sum).toEqual(15);
  });
});
