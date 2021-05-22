function substrings (string) {
  let substrings = [];
  for (let intialChar = 0; intialChar <= string.length; intialChar++) {
    for (let length = 1; length <= string.length; length += 1) {
      let charString = string.slice(intialChar, length);
      if (charString !== "") {
        substrings.push(charString);
      }
    }
  }
  return substrings;
}

function palindromes (palinString) {
  let allSubstrings = substrings(palinString);
  let allPalindromes = [];
  for (let word = 0; word < allSubstrings.length; word++) {
    if ((allSubstrings[word].length > 1) && allSubstrings[word] === allSubstrings[word].split("").reverse().join("")) {
      allPalindromes.push(allSubstrings[word]);
    }
  }
  console.log(allPalindromes);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]