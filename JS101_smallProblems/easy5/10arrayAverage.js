function average (array1) {
  let average = 0;
  for (let index = 0; index < array1.length; index++) {
    average += array1[index];
  }
  console.log(Math.floor((average / array1.length)));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40