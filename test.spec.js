import { Person } from './test';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("and so is a spec", function() {
    var a = true;

    expect(a).toBe(true);
  });

  it("and has a positive case", function() {
    expect(true).toBe(true);
  });

});
