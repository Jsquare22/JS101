const readline = require("readline-sync");

function madLib (noun,verb,adjective,adverb) {
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}.`);
}

let userNoun = readline.question(" Enter a noun: ");
let userVerb = readline.question("Enter a verb:");
let userAdjective = readline.question("Enter an adjective: ");
let userAdverb = readline.question("Enter an adverb: ");

madLib(userNoun,userVerb,userAdjective, userAdverb);
