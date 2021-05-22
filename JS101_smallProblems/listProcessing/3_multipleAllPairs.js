function multiplyAllPairs (array1,array2) {
  let multArray = [];
  for (let index = 0; index < array1.length; index++) {
    for (let jdex = 0; jdex < array2.length; jdex++) {
      multArray.push(array1[index] * array2[jdex]);
    }
  }
  let sortedArray = alphabeticNumberSort(multArray);
  console.log(sortedArray);
}

function wordSort(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]