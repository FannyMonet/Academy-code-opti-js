import multiply from "../src/multiply";

describe("multiply", () => {
  test("should multiply values of an array by 2", () => {
    // Given
    const array = [1, 2, 3, 4, 5];

    // When
    const [, startTime] = process.hrtime();
    const multipliedArray = multiply(array, 2);
    const [, endTime] = process.hrtime();
    const execTime = (endTime - startTime) / 1000;
    // Then
    expect(multipliedArray).toEqual([2, 4, 6, 8, 10]);
  });
});
