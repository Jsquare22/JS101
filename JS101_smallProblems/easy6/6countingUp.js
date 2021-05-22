function sequence (number) {
  let sequence = [];
  for (let index = 1; index <= number; index++) {
    sequence.push(index);
  }
  console.log(sequence);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]