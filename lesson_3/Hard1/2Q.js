let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Output: prints out first: [1.2] because push mutates the array and
// we pass it a reference to the array.