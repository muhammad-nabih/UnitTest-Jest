import sayTest from "../say";

test("should return hello world when called", () => {
  expect(sayTest()).toBe("Hello, World !");
});
