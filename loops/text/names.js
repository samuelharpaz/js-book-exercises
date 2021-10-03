let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
// let index = 0;

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// console.log(upperNames);

// For Loop Version
for (let i = 0; i < names.length; i++) {
  upperNames[i] = names[i].toUpperCase();
}

console.log(upperNames);
