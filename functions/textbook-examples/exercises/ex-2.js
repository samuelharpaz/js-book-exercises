const rlSync = require('readline-sync');

function getName(prompt) {
  return rlSync.question(`${prompt} `);
}

const firstName = getName('What is your first name?');
const lastName = getName('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);
