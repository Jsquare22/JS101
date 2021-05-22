const readline = require('readline-sync');
console.log("What is the bill?");
let bill = readline.question();
console.log("What is the tip percentage?");
let tipPercent = readline.question();

let tip = bill * (tipPercent / 100);
console.log(`The tip is $${tip}`);
let total = Number(tip) + Number(bill);
console.log(`The total is ${total.toFixed(2)}.`);