/*
This is a load calculator. It will take in three pieces of info.
1: Loan amount
2: Annual Percentage Rate(APR) -> in months to use formula
3: Loan duration in months

Output:
1: Monthly payments to pay off the loan
*/

// Intiliazing variables to get user input and display messages.
// again is used rerun program if user asks to
const readline = require('readline-sync');
const MESSAGES = require('./loanCalculatorMessages.json');
let again = true;

// Adds => before any output
function prompt(message) {
  console.log(`=> ${message}`);
}

// Checks to make sure user input are numbers
function invalidNumber(input) {
  if (input > 0) {
    return input.trimStart() === '' || Number.isNaN(Number(input));
  } else {
    return true;
  }
}

//Converting APR into monthly interest rate
function aprMonths (apr) {
  return (apr / 100) / 12;
}

// Calculating monthly paytments
function monthlyPayments(loanAmount,monthlyInterestRate,loanDuration) {
  let monthlyPayment = loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  return Number.parseFloat(monthlyPayment).toFixed(2);
}


while (again) {
  //Asking user different inputs to calculate monthly payments
  //Asking user for the loan amount
  prompt(MESSAGES['welcome']);
  prompt(MESSAGES['loanAmountMessage']);
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidValueMessage']);
    loanAmount = readline.question();
  }
  // Asking user for APR and converting it to months
  prompt(MESSAGES['aprMessage']);
  let aprYearly = readline.question();
  while (invalidNumber(aprYearly)) {
    prompt(MESSAGES['invalidValueMessage']);
    aprYearly = readline.question();
  }
  let aprMonthly = aprMonths(aprYearly);

  //Asking user for loan term in months.
  prompt(MESSAGES['loanDurationMessage']);
  let loanDurationMonths = readline.question();
  while (invalidNumber(loanDurationMonths)) {
    prompt(MESSAGES['invalidValueMessage']);
    loanDurationMonths = readline.question();
  }

  let monthPayment = monthlyPayments(loanAmount,aprMonthly,loanDurationMonths);

  //Displaying all user input to user and final output
  prompt(MESSAGES["userInputsMessage"]);
  prompt(`Loan Amount: ${loanAmount}`);
  prompt(`Annual Percentage Rate (APR): ${aprYearly}%`);
  prompt(`Loan Duration (Months): ${loanDurationMonths}`);
  prompt(`${MESSAGES['monthlyPaymentMessage']}: ${monthPayment}.`);


  // Asks the user if they want to do another calculation
  prompt(MESSAGES['continueMessage']);
  again = readline.question();
  while (!['1','2'].includes(again)) {
    prompt("Enter 1 for Yes and 2 for No.");
    again = readline.question();
  }
  if (Number(again) === 1) {
    again = true;
  } else if (Number(again) === 2) {
    again = false;
  }
}