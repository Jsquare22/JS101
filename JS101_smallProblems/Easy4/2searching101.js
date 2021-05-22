const readline = require("readline-sync");
let userNums = [];

function addToArray(num) {
  userNums.push(num);
}

let userNum1 = readline.question("Enter the 1st number");
let userNum2 = readline.question("Enter the 2nd number");
let userNum3 = readline.question("Enter the 3rd number");
let userNum4 = readline.question("Enter the 4th number");
let userNum5 = readline.question("Enter the 5th number");
let searchNum = readline.question("Enter the last number.");

addToArray(userNum1);
addToArray(userNum2);
addToArray(userNum3);
addToArray(userNum4);
addToArray(userNum5);


let numsCombined = userNums.join(",");
for (let index = 0; index < userNums.length; index++) {
  if (searchNum === userNums[index]) {
    console.log(`The number ${searchNum} appears in ${numsCombined}`);
  }
}
