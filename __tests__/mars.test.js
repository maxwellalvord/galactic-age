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
  test("Should output the users life expectancy", () => {
    const spaceTime = new Mars(1, 40);
    expect(spaceTime.marsLife(40)).toEqual(40);
  });
  test("Should calculate the time left the user has to live.", () => {
    const spaceTime = new Mars(1, 40);
    expect(spaceTime.marsRemain(1, 40)).toEqual(40 - (1/1.88));
  });
  test("should output a positive number to indicate if user has lived longer than expected", () => {
    const spaceTime = new Mars(1000, 40);
    expect(spaceTime.marsRemain(1000, 40)).toEqual((1000/1.88) - 40);
  });
});
