function multiplicativeAverage (array1) {
  let allMulti = 1;
  for (let index = 0; index < array1.length; index++) {
    allMulti *= array1[index];
  }
  let averageMulti = (allMulti / array1.length).toFixed(3);
  console.log(averageMulti.toString());

}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"