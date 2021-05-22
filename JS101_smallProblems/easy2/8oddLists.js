function oddities (arr1) {
  let oddArray = [];
  for (let index = 0; index < arr1.length; index++) {
    if (index % 2 === 0) {
      oddArray.push(arr1[index]);
    }
  }
  return oddArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []