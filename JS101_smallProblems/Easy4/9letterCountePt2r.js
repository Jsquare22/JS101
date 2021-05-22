function wordSizes(sentence) {
  sentence = sentence.split(" ");
  let wordCounter = {};
  if (sentence.length > 1) {
    for (let index = 0; index < sentence.length; index++) {
      let noSpecialChars = sentence[index].replace(/[^a-z0-9+]+/gi,"");
      let key = (noSpecialChars.length).toString();
      if (wordCounter.hasOwnProperty(key)) {
        wordCounter[key] += 1;
      } else {
        wordCounter[key] = 1;
      }
    }
  }
  console.log(wordCounter);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}