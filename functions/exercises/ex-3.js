const rlSync = require('readline-sync');

function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  return +rlSync.question(prompt);
}

const num1 = getNumber('Enter the first number: ');
const num2 = getNumber('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
