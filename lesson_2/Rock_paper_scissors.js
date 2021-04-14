const readline = require('readline-sync');
const WIN_SCORE = 5;
const VALID_CHOICES = ['r', 'p', 's','sp','l'];
const WINNING_COMBOS = {
  r: ['s','l'],
  p: ['r','sp'],
  s: ['p', 'l'],
  l: ['p', 'sp'],
  sp: ['r', 's']
};
let repeat = true;
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}


function getPlayerChoice () {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  prompt(`Player chose ${choice}.`);
  return choice;
}

function getComputerChoice () {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let cpuChoice = VALID_CHOICES[randomIndex];
  prompt(` Computer chose ${cpuChoice}.`);
  return cpuChoice;
}


function determineRoundWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    prompt("It is a tie.");
  } else if (playerWins(choice,computerChoice)) {
    playerScore += 1;
    prompt("Player wins!");
  } else {
    computerScore += 1;
    prompt("Computer wins!");
  }
}

function playerWins (userChoice,compChoice) {
  return WINNING_COMBOS[userChoice].includes(compChoice);
}

function determineGameWinner(userScore,computerScore) {
  if (userScore === WIN_SCORE) {
    prompt("Game Over. Player Wins.");
    playAgain();
  } else if (computerScore === WIN_SCORE) {
    prompt("Game OVer. Computer Wins.");
    playAgain();
  }
}


function playAgain () {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') {
    repeat = false;
  } else {
    repeat = true;
    playerScore = 0;
    computerScore = 0;
  }
}


while (repeat) {
  prompt(`Score: Player: ${playerScore}, Computer: ${computerScore}`);
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  determineRoundWinner(playerChoice, computerChoice);
  determineGameWinner(playerScore, computerScore);

}