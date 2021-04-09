/*
Lesson 2: First program. Simple Calculator
Steps:
1: Ask user for 1st num
2: Ask user for 2nd num
3: Ask for operator
4: Perform operation
5: Display result
*/
const readline = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input));
}


prompt("Welcome to the Calculator!");

prompt("What is the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Not a valid number. Try again.");
  number1 = readline.question();
}

prompt("What is the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Not a valid number. Try again.");
  number1 = readline.question();
}

prompt("What operation would you like to do?\nEnter: 1)Add, 2)Subtract, 3)Multiply, 4)Divide");
let operation = readline.question();
while (['1','2','3','4'].includes(operation)) {
  prompt("Not a valid operation. Choose 1,2,3, or 4.");
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}
prompt(output);


