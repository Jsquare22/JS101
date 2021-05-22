function wordSizes(sentence) {
  sentence = sentence.split(" ");
  let wordCounter = {};
  if (sentence.length > 1) {
    for (let index = 0; index < sentence.length; index++) {
      let key = (sentence[index].length).toString();
      if (wordCounter.hasOwnProperty(key)) {
        wordCounter[key] += 1;
      } else {
        wordCounter[key] = 1;
      }
    }
  }
  console.log(wordCounter);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}