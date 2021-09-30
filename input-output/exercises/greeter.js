const rlSync = require('readline-sync');

const name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}!`);
