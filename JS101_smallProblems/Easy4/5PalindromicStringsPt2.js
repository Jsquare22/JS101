function isRealPalindrome (sentence) {
  let palindrome = true;
  sentence = sentence.toLowerCase().replace(/[^a-z0-9+]+/gi,"");
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

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false