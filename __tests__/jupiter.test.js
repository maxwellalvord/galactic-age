import Jupiter from "./../src/js/jupiter.js";

describe("Jupiter", () => {
  test("should correctly create ratio of earth to jupiter", () => {
    const spaceTime = new Jupiter(11.86);
    expect(spaceTime.earthtime).toEqual(11.86);
  });
  test("Should output the the calculation to jupitertime", () => {
    const spaceTime = new Jupiter(1);
    expect(spaceTime.jupiterTime(1)).toEqual(1/11.86);
  });
  test("Should output the users life expectancy", () => {
    const spaceTime = new Jupiter(1, 50);
    expect(spaceTime.jupiterLife(50)).toEqual(50);
  });
  test("Should calculate teh time left the user has to live.", () => {
    const spaceTime = new Jupiter(1, 50);
    expect(spaceTime.jupiterRemain(1, 50)).toEqual(50 - (1/11.86));
  });
  test("should output a positive number to indicate if user has lived longer than expected", () => {
    const spaceTime = new Jupiter(1000, 50);
    expect(spaceTime.jupiterRemain(1, 50)).toEqual((1000/11.86) - 50);
  });
});