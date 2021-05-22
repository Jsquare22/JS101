let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

// eslint-disable-next-line no-unused-vars
let newAnswer = messWithIt(answer);

console.log(answer - 8);

// Output will be: 34
// This is due to 50 being returned to newAnswer. Answer never gets changed.