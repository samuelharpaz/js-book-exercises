let myProtoObj = {
  foo: 1,
  bar: 2
};

const myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// They do not produce the same output. The for/in loop will include inherited properties from myObj's prototype, myProtoObj. On the other hand, the static method Object.keys will only include own properties.
