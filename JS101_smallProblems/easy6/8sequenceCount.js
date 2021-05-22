function sequence (times,increment) {
  let seqArray = [];
  let sum = 0;
  for (let index = 1; index <= times; index++) {
    sum += increment;
    seqArray.push(sum);
  }
  console.log(seqArray);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []