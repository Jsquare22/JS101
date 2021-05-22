const readline = require('readline-sync');
console.log("Enter the length of the room?");
let length = readline.question();
console.log("Enter the width of the room?");
let width = readline.question();

let sizeOfRoom = length * width;

let sizeSquareFeet = sizeOfRoom * 10.7639;

console.log(`The are of the room is ${sizeOfRoom} square meters (${sizeSquareFeet} square feet).`);
