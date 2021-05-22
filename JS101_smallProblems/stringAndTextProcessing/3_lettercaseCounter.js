function letterCaseCount (string) {
  let letterCount = {lowercase:0, uppercase:0,neither:0};
  let stringArray = string.split("");
  stringArray.forEach(character => {
    switch (checkCase(character)) {
      case "Up":
        letterCount.uppercase += 1;
        break;
      case "Lo":
        letterCount.lowercase += 1;
        break;
      case "Ne":
        letterCount.neither += 1;
    }
  });
  console.log(letterCount);
}

function checkCase (character) {
  if (character.match(/[a-z]/i)) {
    if (character === character.toUpperCase()) {
      return "Up";
    } else if (character === character.toLowerCase()) {
      return "Lo";
    }
  }
  return "Ne";
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }