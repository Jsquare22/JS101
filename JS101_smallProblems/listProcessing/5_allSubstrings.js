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
  console.log(substrings);
}

substrings('abcde');

/* returns
  [ "a", "ab", "abc", "abcd", "abcde",
    "b", "bc", "bcd", "bcde",
    "c", "cd", "cde",
    "d", "de",
    "e" ]
    */