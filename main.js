const add = (...args) => {
  const sum = args.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );
  return sum;
};

const subtract = (...args) => {
  const diff = args.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  );
  return diff;
};

const multiply = (...args) => {
  const prod = args.reduce(
    (accumulator, currentValue) => currentValue * accumulator, 1
  );
  return prod;
};

const divide = (...args) => {
  const result = args.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );
  return result;
};
