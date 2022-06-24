import Mercury from "./../src/js/mercury.js";

describe("Mercury", () => {
  test("should correctly create ratio of earth to mercury", () => {
    const spaceTime = new Mercury(.24);
    expect(spaceTime.earthtime).toEqual(.24);
  });
  test("Should output the the calculation to mercurytime", () => {
    const spaceTime = new Mercury(1);
    expect(spaceTime.mercuryTime).toEqual(1/.24);
  });
});
