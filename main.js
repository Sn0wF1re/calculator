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

const firstNum;
const operator;
const secondNum;

const operate = (operator, firstNum, secondNum) => {
  if (operator === '+') {
    add(firstNum, secondNum);
  } else if (operator === '-') {
    subtract(firstNum, secondNum);
  } else if (operator === '*') {
    multiply(firstNum, secondNum);
  } else if (operator === '/') {
    divide(firstNum, secondNum);
  }
}
