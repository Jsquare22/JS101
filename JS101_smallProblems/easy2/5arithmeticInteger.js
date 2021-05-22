const readline = require("readline-sync");

function calculate (num1,num2) {
  console.log(`${num1} + ${num2} = ` + (Number(num1) + Number(num2)));
  console.log(`${num1} - ${num2} = ` + (num1 - num2));
  console.log(`${num1} * ${num2} = ` + (num1 * num2));
  console.log(`${num1} / ${num2} = ` + (Math.round(num1 / num2)));
  console.log(`${num1} % ${num2} = ` + (num1 % num2));
  console.log(`${num1} ** ${num2} = ` + (num1 ** num2));
}

let userNum1 = readline.question("Enter your first number. \n");
let userNum2 = readline.question("Enter your second number.\n");

calculate(userNum1,userNum2);
