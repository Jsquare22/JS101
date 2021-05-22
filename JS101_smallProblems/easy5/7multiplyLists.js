function multiplyList (array1,array2) {
  let combinedArray = [];
  for (let index = 0; index < array1.length; index++) {
    let multi = array1[index] * array2[index];
    combinedArray.push(multi);
  }
  console.log(combinedArray);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]