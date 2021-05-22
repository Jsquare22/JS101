function crunch (str1) {
  let strArray = str1.split("");
  let shortString = [];
  for (let index = 0; index < strArray.length; index++) {
    //console.log(strArray);
    //console.log(shortString);
    //console.log("-------------------------");
    if (index === 0) {
      shortString.push(strArray[index]);
    } else if (strArray[index - 1] !== strArray[index]) {
      shortString.push(strArray[index]);
    }
  }
  let finalString = shortString.join("");
  console.log(finalString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""