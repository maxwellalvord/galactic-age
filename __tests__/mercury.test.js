import Mercury from "./../src/js/mercury.js";

describe("Mercury", () => {
  test("should correctly create ratio of earth to mercury", () => {
    const spaceTime = new Mercury(.24);
    expect(spaceTime).toEqual(.24);
  });
});
