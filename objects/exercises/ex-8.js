let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3
};

function copyObj(obj, arrKeys = Object.keys(obj)) {
  const newObj = {};

  arrKeys.forEach(key => {
    newObj[key] = obj[key];
  });

  return newObj;
}

console.log(copyObj(objToCopy));
console.log(copyObj(objToCopy, ['foo', 'qux']));
console.log(copyObj(objToCopy, ['bar']));
