import { sumAsyncArrays } from "../src/async";

describe("async exercices", () => {
  test("should sum two Promises arrays", async () => {
    // Given
    const arr1 = Promise.resolve([1, 2, 3, 4, 5]);
    const arr2 = Promise.resolve([2, 3, 4, 5, 6]);
    const sum = await sumAsyncArrays(arr1, arr2);
    expect(sum).toEqual([3, 5, 7, 9, 11]);
  });
});
