function interleave (array1,array2) {
  let combinedArray = [];
  for (let index = 0; index < array1.length; index++) {
    combinedArray.push(array1[index],array2[index]);
  }
  console.log(combinedArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]