import Mars from "./../src/js/Mars.js";

describe("Mars", () => {
  test("should correctly create ratio of earth to mars", () => {
    const spaceTime = new Mars(1.88);
    expect(spaceTime.earthtime).toEqual(1.88);
  });
  test("Should output the the calculation to marstime", () => {
    const spaceTime = new Mars(1);
    expect(spaceTime.marsTime(1)).toEqual(1/1.88);
  });
});
