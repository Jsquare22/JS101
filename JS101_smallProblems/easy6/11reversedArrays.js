function reverse (array) {
  let tempArray = array.slice();
  for (let index = 0; index < array.length; index++) {
    array[index] = tempArray[array.length - 1 - index];
  }
  console.log(array);
}

reverse([1,2,3,4]);
reverse(["a","b","c","d"]);
reverse(["abc"]);