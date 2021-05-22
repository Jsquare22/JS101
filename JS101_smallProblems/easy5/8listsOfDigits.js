function digitList (num1) {
  let stringNum = num1.toString();
  let stringArray = stringNum.split("");
  for (let index = 0; index < stringArray.length; index++) {
    stringArray[index] = Number(stringArray[index]);
  }
  console.log(stringArray);
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]