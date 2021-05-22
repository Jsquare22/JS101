function swapCase (phrase) {
  let charsInPhrase = phrase.split("");
  charsInPhrase.forEach ((char,index) => {
    switch (checkCase(char)) {
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

function checkCase (oneChar) {
  if (oneChar.match(/[a-z]/i)) {
    if (oneChar === oneChar.toLowerCase()) {
      return true;
    } else if (oneChar === oneChar.toUpperCase()) {
      return false;
    }
  }
  return undefined;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"