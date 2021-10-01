const rlSync = require('readline-sync');

function getName(query) {
  return rlSync.question(`${query} `);
}

const firstName = getName('What is your first name?');
const lastName = getName('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);
