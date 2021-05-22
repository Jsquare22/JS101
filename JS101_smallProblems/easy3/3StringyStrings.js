function stringy (num) {
  let strNum = "";
  let count = 0;
  while ( count < num) {
    if (count % 2 === 0) {
      strNum += "1";
    } else {
      strNum += "0";
    }
    count += 1;
  }
  console.log(strNum);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"