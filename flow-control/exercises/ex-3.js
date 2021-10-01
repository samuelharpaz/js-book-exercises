const evenOrOdd = num => {
  if (!Number.isInteger(num)) {
    throw new Error('Number must be an integer');
  }

  console.log(num % 2 === 0 ? 'even' : 'odd');
};

evenOrOdd('hello');
