function staggeredCase (phrase) {
  let charsInPhrase = phrase.split("");
  charsInPhrase.forEach ((char,index) => {
    switch (checkCase(char,index)) {
      case true:
        charsInPhrase[index] = char.toUpperCase();
        break;
      case false:
        charsInPhrase[index] = char.toLowerCase();
        break;
    }
  });
  console.log(charsInPhrase.join(""));
}
function checkCase (oneChar,counter) {
  if (oneChar.match(/[a-z]/i)) {
    if (counter % 2 === 0) {
      return true;
    } else if (counter % 2 >= 0) {
      return false;
    }
  }
  return undefined;
}


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"