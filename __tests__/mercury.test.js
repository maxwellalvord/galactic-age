import Mercury from "./../src/js/mercury.js";

describe("Mercury", () => {
  
  test("should correctly create ratio of earth to mercury", () => {
    const spaceTime = new Mercury(.24);
    expect(spaceTime.earthtime).toEqual(.24);
  });

  test("Should output the the calculation to mercurytime", () => {
    const spaceTime = new Mercury(1);
    expect(spaceTime.mercuryTime(1)).toEqual(1/.24);
  });

  test("Should output the users life expectancy", () => {
    const spaceTime = new Mercury(1, 45);
    expect(spaceTime.mercuryLife(45)).toEqual(45);
  });

  test("Should calculate the time left the user has to live.", () => {
    const spaceTime = new Mercury(1, 45);
    expect(spaceTime.mercuryRemain(1, 45)).toEqual(45 - (1/.24));
  });

  test("should output a positive number to indicate if user has lived longer than expected", () => {
    const spaceTime = new Mercury(1000, 45);
    expect(spaceTime.mercuryRemain(1000, 45)).toEqual((1000/.24) - 45);
  });
});
