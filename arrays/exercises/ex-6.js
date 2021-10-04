let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.map(str => str.length).filter(length => length % 2 !== 0);
}

console.log(oddLengths(arr));
