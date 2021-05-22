/* eslint-disable max-lines-per-function */
let turnOrder = '';
const USER_MARK = "X";
const CPU_MARK = "O";
const POINTS_TO_WIN = 5;
const NUMBER_OF_SQUARES = 9;
const WINNINGBOARDS = [
  [1,2,3] , [4,5,6], [7,8,9],
  [1,4,7] , [2,5,8], [3,6,9],
  [1,5,9],[3,5,7]
];
const readline = require('readline-sync');
let board = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

let scores = {
  User: 0,
  CPU: 0,
};

function displayBoard(board) {
  console.clear();
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function intializedBoard () {
  board = {};
  for (let square = 1; square <= 9; square++) {
    board[square] = square;
  }
  return board;
}

function resetScore () {
  scores.User = 0;
  scores.CPU = 0;
}

function displayScore () {
  console.log (`User: ${scores.User}. CPU: ${scores.CPU}`);
}

function whoGoesFirst (playerTurn) {
  if (playerTurn === '') {
    let firstPlayer = Math.floor(Math.random() * 2);
    if (firstPlayer === 1) {
      console.log("Player goes first");
      turnOrder = 'player';
    } else {
      console.log("Computer goes first");
      turnOrder = 'cpu';
    }
  }
}

function userInput () {
  let choice = readline.question('Enter a number from 1-9 to place in the corresponding square. \n' );
  let freeSquare = isSquareEmpty(choice,board);
  if (freeSquare) {
    return choice;
  } else {
    console.log("Square is marked. Try a different square.");
    choice = userInput();
    return choice.toString();
  }
}

function cpuInput () {
  let choice = 0;
  choice = cpuOffensiveInput();
  if (!cpuWinsWithMove(choice)) {
    choice = cpuDefensiveInput ();
    if (choice === 0) {
      choice = cpuRandomEmptySpaceChoice();
      let freeSquare = isSquareEmpty(choice,board);
      if (freeSquare) {
        return choice;
      } else {
        choice = cpuInput();
        return choice.toString();
      }
    }
  }
  return choice.toString();
}

function cpuRandomEmptySpaceChoice () {
  let emptySpaces = [];
  let randomChoice = 0;
  for (let index = 0; index <= NUMBER_OF_SQUARES; index++) {
    if (Number.isInteger(board[index])) {
      emptySpaces.push(index);
    }
  }
  if (emptySpaces.length === 1) {
    randomChoice = emptySpaces[0];
    return randomChoice;
  }
  let randomIndex = Math.floor(Math.random() * emptySpaces.length);
  randomChoice = emptySpaces[randomIndex];
  return randomChoice;
}

function cpuWinsWithMove (cpuMove) {
  let cpuSq = cpuMove;
  if (cpuMove === 0) {
    return false;
  }
  board[cpuSq] = CPU_MARK;
  for (let winCombo = 0; winCombo < WINNINGBOARDS.length; winCombo++) {
    let [winValue1, winValue2, winValue3] = WINNINGBOARDS[winCombo];
    winValue3 = cpuSq;
    if (
      board[winValue1] === CPU_MARK &&
      board[winValue2] === CPU_MARK &&
      board[winValue3] === CPU_MARK
    ) {
      board[cpuSq] = cpuSq;
      return true;
    }
  }
  board[cpuSq] = cpuSq;
  return false;
}

// eslint-disable-next-line max-statements
function cpuDefensiveInput () {
  let cpuBlockSq = 0;
  for (let winCombo = 0; winCombo < WINNINGBOARDS.length; winCombo++) {
    let [sq1,sq2,sq3] = WINNINGBOARDS[winCombo];
    if (board[sq1] === USER_MARK && board[sq2] === USER_MARK) {
      if (isSquareEmpty(sq3,board)) {
        cpuBlockSq = sq3;
        return cpuBlockSq;
      }
    } else if (board[sq1] === USER_MARK && board[sq3] === USER_MARK) {
      if (isSquareEmpty(sq2,board)) {
        cpuBlockSq = sq2;
        return cpuBlockSq;
      }
    } else if (board[sq2] === USER_MARK && board[sq3] === USER_MARK) {
      if (isSquareEmpty(sq1,board)) {
        cpuBlockSq = sq1;
        return cpuBlockSq;
      }
    }
  }
  return cpuBlockSq;
}

// eslint-disable-next-line max-statements
function cpuOffensiveInput () {
  let cpuAttackSquare = 0;
  for (let winCombo = 0; winCombo < WINNINGBOARDS.length; winCombo++) {
    let [sq1,sq2,sq3] = WINNINGBOARDS[winCombo];
    if (board[sq1] === CPU_MARK && board[sq2] === CPU_MARK) {
      if (isSquareEmpty(sq3,board)) {
        cpuAttackSquare = sq3;
        return cpuAttackSquare;
      }
    } else if (board[sq1] === CPU_MARK && board[sq3] === CPU_MARK) {
      if (isSquareEmpty(sq2,board)) {
        cpuAttackSquare = sq2;
        return cpuAttackSquare;
      }
    } else if (board[sq2] === CPU_MARK && board[sq3] === CPU_MARK) {
      if (isSquareEmpty(sq1,board)) {
        cpuAttackSquare = sq1;
        return cpuAttackSquare;
      }
    }
  }
  return cpuAttackSquare;
}

function isSquareEmpty (playerChoice, board) {
  if (Number.isInteger(board[playerChoice])) {
    return true;
  } else {
    return false;
  }
}

function placePlayerMove (board) {
  let playerMove = '';
  if (turnOrder === 'player') {
    playerMove = userInput();
    board[playerMove] = USER_MARK;
    turnOrder = 'cpu';
  } else if (turnOrder === 'cpu') {
    playerMove = cpuInput();
    board[playerMove] = CPU_MARK;
    turnOrder = 'player';
  }
}

function decideWinner (board) {
  for (let winCombo = 0; winCombo < WINNINGBOARDS.length; winCombo++) {
    let [winValue1, winValue2, winValue3] = WINNINGBOARDS[winCombo];
    if (
      board[winValue1] === USER_MARK &&
      board[winValue2] === USER_MARK &&
      board[winValue3] === USER_MARK
    ) {
      return "User";
    } else if (
      board[winValue1] === CPU_MARK &&
      board[winValue2] === CPU_MARK &&
      board[winValue3] === CPU_MARK
    ) {
      return "CPU";
    }
  }
  return null;
}

function declareWinner (winner) {
  if (winner === "User") {
    console.log("USER WINS!");
    scores[winner] += 1;
    return true;
  } else if (winner === "CPU") {
    console.log("CPU WINS! YOU LOSE!");
    scores[winner] += 1;
    return true;
  }
  return false;
}

function tieGame (board, winner) {
  let boardValues = Object.values(board);
  let isTieGame = false;
  let freeSpaces = 0;
  if (winner === true) {
    return isTieGame;
  }
  for (let index = 0; index < boardValues.length; index++) {
    if (typeof (boardValues[index]) === "number") {
      freeSpaces += 1;
    }
  }
  if (freeSpaces === 0) {
    console.log("TIE GAME!");
    isTieGame = true;
  }
  return isTieGame;
}

function checkFinalWin () {
  if (scores.User === POINTS_TO_WIN || scores.CPU === POINTS_TO_WIN) {
    return true;
  }
  return false;
}

function anotherRound () {
  let answer = readline.question("Do you want to play again? Enter y or n.\n");
  let validInput = false;
  if (answer.toLowerCase() === "y") {
    validInput = true;
  } else if (answer.toLowerCase() === "n") {
    validInput = false;
  } else {
    validInput = anotherRound();
  }
  return validInput;
}

while (true) {
  displayBoard(board);
  intializedBoard();
  while (true) {
    displayBoard(board);
    console.log(`User is ${USER_MARK}. CPU is ${CPU_MARK}`);
    displayScore();
    console.log(`First to 5 points wins.`);
    whoGoesFirst(turnOrder);
    placePlayerMove(board);
    let winner = declareWinner(decideWinner(board));
    if (winner || tieGame(board,winner)) {
      break;
    }
  }
  displayScore();
  if (checkFinalWin()) {
    if (anotherRound()) {
      console.log("Let's go again.");
      turnOrder = '';
      resetScore();
    } else {
      console.log("GAME OVER.");
      break;
    }
  }
}