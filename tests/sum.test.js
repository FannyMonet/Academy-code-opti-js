import sumNumbers from "../src/sum";

describe("sum", () => {
  test("should sum numbers of an array", () => {
    // Given
    const numbers = [1, 2, 3, 4, 5];

    // When
    const [, startTime] = process.hrtime();
    const sum = sumNumbers(numbers);
    const [, endTime] = process.hrtime();
    const execTime = (endTime - startTime) / 1000;
    // Then
    expect(sum).toEqual(15);
  });
});
