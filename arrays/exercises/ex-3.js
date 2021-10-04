let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

// for (let i = 0; i < myArray.length; i++) {
//   const inner = myArray[i];

//   for (let j = 0; j < inner.length; j++) {
//     if (inner[j] % 2 === 0) console.log(inner[j]);
//   }
// }

// for (let row of myArray) {
//   for (let el of row) {
//     if (el % 2 === 0) {
//       console.log(el);
//     }
//   }
// }

myArray.forEach(nested => {
  nested.forEach(el => {
    if (el % 2 === 0) {
      console.log(el);
    }
  });
});
