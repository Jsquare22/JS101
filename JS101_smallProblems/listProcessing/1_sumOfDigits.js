function sum (number) {
  let numberArray = String(number).split("");
  let totalSum = numberArray
    .reduce((accumulator,currentValue) =>
      Number(accumulator) + Number(currentValue));
  console.log(totalSum);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45\