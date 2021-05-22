function doubleConsonants(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx]);
    if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
      stringArray.push(string[idx]);
    }
  }

  return stringArray.join("");
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""