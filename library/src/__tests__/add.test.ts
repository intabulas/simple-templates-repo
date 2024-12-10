import { add } from "..";

describe("Package Test", () => {
  it("Should Add two numbers", () => {
    const result = add(10, 5);
    expect(result).toEqual(15);
  });
});
