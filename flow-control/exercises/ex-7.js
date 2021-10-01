function capitalizeLongString(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(capitalizeLongString('Hello World'));
console.log(capitalizeLongString('goodbyeaaaa'));
