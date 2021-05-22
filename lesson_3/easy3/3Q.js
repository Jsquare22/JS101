let str1 = "hello there";
let str2 = str1;
// eslint-disable-next-line no-unused-vars
str2 = "goodbye!";
console.log(str1);

// Output will be hello there due to str2 just being a copy.
// Javascript has strings being a primitive value so they are immutable.
