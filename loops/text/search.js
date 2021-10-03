let array = [13, 1, 5, 9, 2, 6, 5, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);
