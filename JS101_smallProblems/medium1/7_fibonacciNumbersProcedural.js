/* eslint-disable max-lines-per-function */
function fibonacci (nth) {
  let total = 0;
  let count = 3;
  let prev1 = 1;
  let prev2 = 1;
  let temp = 0;
  if (nth <= 2) {
    console.log(1);
  } else {
    while (count <= nth) {
      total = prev1 + prev2;
      temp = prev1;
      prev1 = total;
      prev2 = temp;
      /*
      console.log("PREV1 = " + prev1);
      console.log("PREV2 = " + prev2 );
      console.log("TEMP = " + temp);
      console.log("TOTAL = " + total);
      */
      count++;
    }
  }
  console.log(total);
  console.log("----------------------");
}


fibonacci(3);       // 2
fibonacci(4);      // 3
fibonacci(5);       // 5
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050