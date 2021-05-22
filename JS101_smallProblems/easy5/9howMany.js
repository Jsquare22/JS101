function countOccurrences (array1) {
  let countObj = {};
  for (let index = 0; index < array1.length; index++) {
    if (`${array1[index]}` in countObj) {
      countObj[`${array1[index]}`] += 1;
    } else {
      countObj[`${array1[index]}`] = 1;
    }
  }
  console.log(countObj);
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/