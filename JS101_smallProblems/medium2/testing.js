let string = "A. B ? C! Dog.";
// eslint-disable-next-line no-unused-vars
let reg = /[!.?]/g;
let sentences = string.match(/\w.*?[.!?]/g);
console.log(sentences);
