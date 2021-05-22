function runningTotal (numbers) {
  if (numbers.length <= 1) {
    console.log(numbers);
  } else {
    for (let index = 0; index < numbers.length - 1; index++) {
      let sum = numbers[index] + numbers[index + 1];
      numbers[index + 1] = sum;
    }
    console.log(numbers);
  }
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []