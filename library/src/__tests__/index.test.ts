import { expect, test } from "vitest";
import { add } from "../index";

test("add two numbers", () => {
  const result = add(10, 5);

  expect(result).toBe(15);
});
