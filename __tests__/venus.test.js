import Venus from "./../src/js/venus.js";

describe("Venus", () => {
  test("should correctly create ratio of earth to venus", () => {
    const spaceTime = new Venus(.62);
    expect(spaceTime.earthtime).toEqual(.62);
  });
});