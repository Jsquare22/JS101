function swap(sentence) {
  if (sentence.length < 1) {
    console.log(sentence);
  } else {
    sentence = sentence.split(" ");
    let tempArray = [];
    for (let index = 0; index < sentence.length; index++) {
      tempArray = sentence[index].split("");
      //console.log(tempArray);
      let tempLastChar = tempArray[tempArray.length - 1];
      //console.log(tempLastChar);
      tempArray[tempArray.length - 1] = tempArray[0];
      tempArray[0] = tempLastChar;
      sentence[index] = tempArray.join("");
    }
  }
  console.log(sentence.join(" "));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"