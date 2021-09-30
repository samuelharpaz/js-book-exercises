const rlSync = require('readline-sync');

const firstName = rlSync.question('What is your first name? ');
const lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
