const readline = require("readline-sync");
let name = readline.question("What is your name?");
let arrayName = name.split("");
let lastIndex = arrayName.length - 1;
let nameLastChar = arrayName[lastIndex];
if (nameLastChar === "!") {
  console.log("HELLO BOB. WHY ARE WE SCREAMING?");
} else {
  console.log("Hello Bob.");
}