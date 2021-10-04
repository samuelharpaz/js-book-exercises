let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// const parities = myArray.map(num => {
//   return num % 2 === 0 ? 'even' : 'odd';
// });

// console.log(parities);

const parities = [];

for (let i = 0; i < myArray.length; i++) {
  const num = myArray[i];

  if (num % 2 === 0) {
    parities.push('even');
  } else {
    parities.push('odd');
  }
}

console.log(parities);
