const readline = require("readline-sync");

function retirement (age,retirementAge) {
  let currentYear = new Date().getFullYear();
  let years = retirementAge - age;
  let retirementYear = currentYear + years;

  console.log(`It is ${currentYear}. ou will retire in ${retirementYear}.`);
  console.log(`You only have ${years}`);

}

let userAge = readline.question("What is your age?");
let userRetirementAge = readline.question("Wheat age do you want to retire?");

retirement(userAge,userRetirementAge);