let readline = require("readline-sync");
const VALID_OPERS = ["s","p"];

console.log("Please enter an integer greater than 0: ");
let endNum = readline.question();
while (endNum <= 0) {
  console.log("Choose a nubmer greater than 0.");
  endNum = readline.question();
}

console.log(" Enter (s) to compute the sum, or (p) to computer the product.");
let oper = readline.question();
while (!VALID_OPERS.includes(oper)) {
  console.log("Enter a valid operation");
  oper = readline.question();
}

let totalSum = 0;
let totalProduct = 1;
if (oper === "s") {
  let count = 1;
  while (count <= endNum) {
    totalSum += count;
    count += 1;
  }
  console.log(`Total sum is ${totalSum}.`);
} else {
  let timer = 1;
  while (timer <= endNum) {
    totalProduct *= timer;
    timer += 1;
  }
  console.log(` Product is ${totalProduct}.`);
}


