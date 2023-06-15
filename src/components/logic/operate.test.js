import operate from "./operate";

it("Addition + ", () => {
  expect(operate("103", "02", "+")).toBe("105");
});

it("Substraction - ", () => {
  expect(operate("4", "-3", "-")).toBe("7");
});

it("Multiplication x", () => {
  expect(operate("102342", "0", "x")).toBe("0");
});

it("Division ÷ ", () => {
  expect(operate("1000", "10", "÷")).toBe("100");
});

it("Modulus % ", () => {
  expect(operate("7", "21", "%")).toBe("7");
});
