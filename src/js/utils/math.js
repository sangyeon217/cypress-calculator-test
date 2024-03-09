export const OPERATOR = {
  "+": "ADD",
  "-": "SUBTRACT",
  x: "MULTIPLY",
  "/": "DIVIDE",
};

export const calculate = {
  ADD: (a, b) => a + b,
  SUBTRACT: (a, b) => a - b,
  MULTIPLY: (a, b) => a * b,
  DIVIDE: (a, b) => Math.floor(a / b),
};
