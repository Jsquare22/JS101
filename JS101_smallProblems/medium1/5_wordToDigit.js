const DIGITS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit (phrase) {
  let numberPhrase = phrase.split(" ").map(word => {
    let reg = /[a-zA-Z]+/g;
    word = word.match(reg).join(" ");
    let digitsKeys = Object.keys(DIGITS);
    if (digitsKeys.includes(word)) {
      return DIGITS[word];
    } else {
      return word;
    }
  });
  console.log(numberPhrase.join(" "));
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."