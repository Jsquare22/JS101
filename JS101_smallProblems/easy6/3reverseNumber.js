function reverseNumber (number) {
  let numArray = (number.toString()).split("");
  numArray = numArray.reverse();
  let reverse = Number(numArray.join(""));
  console.log(reverse);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1