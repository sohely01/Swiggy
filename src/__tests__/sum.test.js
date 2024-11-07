/* eslint-disable no-undef */
import { Sum } from "../Sum";

test("Calculate sum of two numbers", () => {
  const result = Sum(2, 3);
  expect(result).toBe(5);
});

