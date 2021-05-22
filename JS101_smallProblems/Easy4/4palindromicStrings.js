function isPalindrome (sentence) {
  let palindrome = true;
  let sentenceArray = sentence.split("");
  for (let index = 0; index < sentenceArray.length - 1; index++) {
    if (sentenceArray[index] !==
      sentenceArray[sentenceArray.length - 1 - index]) {
      palindrome = false;
    }
  }
  console.log(palindrome);
}
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true