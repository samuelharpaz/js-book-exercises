let obj = {
  b: 2,
  a: 1,
  c: 3
};

const keysArrUpper = Object.keys(obj).map(key => key.toUpperCase());
console.log(keysArrUpper);
console.log(obj);
