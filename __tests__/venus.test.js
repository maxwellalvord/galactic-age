import Venus from "./../src/js/venus.js";

describe("Venus", () => {
  test("should correctly create ratio of earth to venus", () => {
    const spaceTime = new Venus(.62);
    expect(spaceTime.earthtime).toEqual(.62);
  });
  test("Should output the the calculation to venustime", () => {
    const spaceTime = new Venus(1);
    expect(spaceTime.venusTime(1)).toEqual(1/.62);
  });
});