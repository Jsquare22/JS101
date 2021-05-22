function leadingSubstrings (str) {
  if (str.length < 1) {
    console.log(str);
  }
  let substrings = [""];
  let strArray = str.split("");
  strArray.forEach((char,index) => {
    if (index < 1) {
      substrings[index] = char;
    } else {
      substrings[index] = substrings[index - 1] + char;
    }
  });
  console.log(substrings);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]