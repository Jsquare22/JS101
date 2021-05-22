// eslint-disable-next-line max-lines-per-function
function twice(maybeDouble) {
  let frontNum = [];
  let backNum = [];
  let numArray = maybeDouble.toString();
  numArray = numArray.split("");
  let middleOfNum = numArray.length / 2;
  if (numArray.length % 2 === 0) {
    let count = 0;
    console.log("--------------------------------");
    while (count <= (middleOfNum - 1)) {
      frontNum.push(numArray[count]);
      backNum.push(numArray[(numArray.length - middleOfNum) + count]);
      count++;
    }
    frontNum = frontNum.join();
    backNum = backNum.join();
    // eslint-disable-next-line eqeqeq
    if (frontNum == backNum) {
      console.log(maybeDouble);
    } else {
      console.log(maybeDouble * 2);
    }
  } else {
    console.log(maybeDouble * 2);
  }
  //console.log(frontNum);
  //console.log(backNum);
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(3333);        // 3333
twice(103103);        // 103103
twice(7676);        // 7676