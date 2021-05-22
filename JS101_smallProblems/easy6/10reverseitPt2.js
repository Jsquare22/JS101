function reverseWords (sentence) {
  let sentenceArray = sentence.split(" ");
  for (let index = 0; index < sentenceArray.length; index++) {
    if (sentenceArray[index].length > 4) {
      sentenceArray[index] = sentenceArray[index].split("").reverse().join("");
    }
  }
  console.log(sentenceArray.join(" "));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"