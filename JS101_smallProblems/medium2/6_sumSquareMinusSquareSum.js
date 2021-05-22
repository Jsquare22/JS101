function sumSquareDifference (number) {
  let sumOfSquares = sumSquares(number);
  let sumThenSquared = totalSquared(number);
  console.log(sumThenSquared - sumOfSquares);
}

function sumSquares (num1) {
  let total = 0;
  for (let count = 0; count <= num1; count++) {
    total += count ** 2;
  }
  return total;
}

function totalSquared (num2) {
  let total = 0;
  for (let count = 0; count <= num2; count++) {
    total += count;
  }
  return total ** 2;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150