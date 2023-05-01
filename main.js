let firstNum;
let operator;
let secondNum;

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
  if (args[1] === 0) return "Cannot Divide by 0";
  const result = args.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );
  return result;
};
console.log(divide(10, 0, 5));

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