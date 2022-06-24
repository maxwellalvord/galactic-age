import Jupiter from "./../src/js/jupiter.js";

describe("Jupiter", () => {
  test("should correctly create ratio of earth to jupiter", () => {
    const spaceTime = new Jupiter(11.86);
    expect(spaceTime.earthtime).toEqual(11.86);
  });
});