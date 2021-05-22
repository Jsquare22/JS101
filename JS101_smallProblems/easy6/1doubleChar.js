function repeater (sentence) {
  let dupeChars = "";
  if (sentence.length < 1) {
    console.log(sentence);
  } else {
    for (let index = 0; index < sentence.length; index++) {
      dupeChars = dupeChars.concat(sentence.charAt(index).repeat(2));
    }
  }
  console.log(dupeChars);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""