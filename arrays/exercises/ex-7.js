let array = [3, 5, 7];

const sumOfSquares = arr => {
  return arr.reduce((acc, curr) => acc + curr ** 2, 0);
};

console.log(sumOfSquares(array));
