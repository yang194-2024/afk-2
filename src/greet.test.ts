import { describe, it, expect } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  it("greets a named person", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });

  it("defaults to 'world' when no name is given", () => {
    expect(greet()).toBe("Hello, world!");
  });

  it("trims surrounding whitespace from the name", () => {
    expect(greet("  Grace  ")).toBe("Hello, Grace!");
  });
});
