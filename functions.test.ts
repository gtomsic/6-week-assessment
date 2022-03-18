const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  const givenShuffle = shuffleArray([1, 2, 3, 4]);

  test("Checking the length of the array", () => {
    expect.arrayContaining([1, 2, 3, 4]);
  });

  test("Testing for the length of Array", () => {
    expect(givenShuffle.length).toEqual(4);
  });
});
