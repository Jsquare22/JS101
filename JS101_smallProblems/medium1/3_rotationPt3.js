function maxRotation (inputNum) {
  let numString = String(inputNum).split("");
  let maxedRotateNum = Number(rotateString(String(inputNum)));
  let tick = 1;
  let inputNumLength = numString.length;
  while (tick < inputNumLength) {
    //console.log(inputNumLength - tick);
    maxedRotateNum =
    // eslint-disable-next-line max-len
    rotateRightmostDigits(maxedRotateNum, inputNumLength - tick);
    //console.log(maxedRotateNum);
    tick += 1;
  }
  console.log(maxedRotateNum);
}

function rotateRightmostDigits(number, count) {
  //console.log(number + " Number inside funciton");
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);
  //console.log(resultString);
  return (Number(resultString));
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845