let arr = [];
arr.length = 3;
console.log(arr);

console.log(arr[0]);

console.log(arr.filter(el => el === undefined));

arr.forEach(el => console.log(el));

arr[1] = 3;
console.log(arr);

console.log(arr.length);

arr.forEach(el => console.log(el));

console.log(Object.keys(arr));
