let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengthsReduce = strings => {
  return strings.reduce((acc, curr) => {
    if (curr.length % 2 === 1) {
      acc.push(curr.length);
    }
    return acc;
  }, []);
};

console.log(oddLengthsReduce(arr));
