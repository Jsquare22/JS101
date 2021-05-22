function isUppercase (string) {
  let lettersOnly = string.replace(/\W/g," ");
  if (lettersOnly.toUpperCase() === lettersOnly) console.log(true);
  else {
    console.log(false);
  }
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true