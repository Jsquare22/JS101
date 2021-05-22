function isPalindromicNumber (sentence) {
  let palindrome = true;
  sentence = sentence.toString();
  //sentence = sentence.toLowerCase().replace(/[^a-z0-9+]+/gi,"");
  console.log(sentence);
  let sentenceArray = sentence.split("");
  for (let index = 0; index < sentenceArray.length - 1; index++) {
    if (sentenceArray[index] !==
      sentenceArray[sentenceArray.length - 1 - index]) {
      palindrome = false;
    }
  }
  console.log(palindrome);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true