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

  test("Should output the users life expectancy", () => {
    const spaceTime = new Venus(1, 60);
    expect(spaceTime.venusLife(60)).toEqual(60);
  });

  test("Should calculate the time left the user has to live.", () => {
    const spaceTime = new Venus(1, 60);
    expect(spaceTime.venusRemain(1, 60)).toEqual(60 - (1/.62));
  });
  
  test("should output a positive number to indicate if user has lived longer than expected", () => {
    const spaceTime = new Venus(1000, 60);
    expect(spaceTime.venusRemain(1000, 60)).toEqual((1000/.62) - 60);
  });
});