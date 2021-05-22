// eslint-disable-next-line max-lines-per-function
function staggeredCase (phrase) {
  let charsInPhrase = phrase.split("");
  let count = 0;
  charsInPhrase.forEach ((char,index) => {
    switch (checkCase(char,count)) {
      case true:
        charsInPhrase[index] = char.toUpperCase();
        count++;
        break;
      case false:
        charsInPhrase[index] = char.toLowerCase();
        count++;
        break;
      default:
        break;
    }
  });
  let finalPhrase = (charsInPhrase.join(""));
  console.log(finalPhrase);
  return finalPhrase;
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


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);