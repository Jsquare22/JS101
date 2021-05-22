function wordCap(words) {
  let wordArray = words.split(" ");
  wordArray.forEach((word,index) => {
    wordArray[index] = word.replace(word[0],word[0].toUpperCase());
  });
  console.log(wordArray.join(" "));
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'