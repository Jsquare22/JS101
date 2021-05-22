function centerOf (sentence) {
  let middleCharIndex = Math.ceil(sentence.length / 2);
  let midChars = "";
  if ((sentence.length - 1) % 2 === 0) {
    midChars = sentence.charAt(middleCharIndex - 1);
    console.log(midChars);
  } else {
    midChars = sentence.charAt(middleCharIndex - 1)
      .concat(sentence.charAt(middleCharIndex));
    console.log(midChars);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"