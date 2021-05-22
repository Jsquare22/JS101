function union (array1,array2) {
  for (let index = 0; index < array2.length; index++) {
    if (!array1.includes(array2[index])) {
      array1.push(array2[index]);
    }
  }
  console.log(array1);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]