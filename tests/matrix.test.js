import sumColumns from "../src/matrix";

describe("sum columns", () => {
  test("should sum numbers of a 3x3 matrix", () => {
    // Given
    const matrix = [
      [1, 3, 4],
      [9, 5, 2],
      [7, 4, 8],
    ];
    // When
    const result = sumColumns(matrix);
    // Then
    expect(result).toEqual([17, 12, 14]);
  });
  test("should sum numbers of a 4x4 matrix", () => {
    // Given
    const matrix = [
      [1, 3, 4, 3],
      [9, 5, 2, 1],
      [7, 4, 8, 5],
    ];

    // When
    const result = sumColumns(matrix);
    // Then
    expect(result).toEqual([17, 12, 14, 9]);
  });

  test("should return an empty array if the matrix is empty", () => {
    // Given
    const matrix = [];
    // When
    const result = sumColumns(matrix);
    // Then
    expect(result).toEqual([]);
  });
});
