function bubbleSort (unsortedArray) {
  let swap = true;
  while (swap) {
    let count = 0;
    for (let index = 0; index < unsortedArray.length - 1; index++) {
      let currentValue = unsortedArray[index];
      let nextValue = unsortedArray[index + 1];
      if (unsortedArray[index] > unsortedArray[index + 1]) {
        unsortedArray[index] = nextValue;
        unsortedArray[index + 1] = currentValue;
        count++;
      }
    }
    if (count === 0) {
      swap = false;
    }
    //console.log(unsortedArray);
    //console.log(swap);
  }
  console.log(unsortedArray);
}

let array1 = [5, 3];
bubbleSort(array1);
//console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
//console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
//console.log(array3);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]