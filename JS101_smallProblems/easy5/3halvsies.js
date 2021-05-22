function halvsies (array1) {
  let half1 = [];
  let half2 = [];
  let count = 0;
  let midPoint = Math.ceil((array1.length) / 2);
  while (midPoint > count) {
    half1[count] = array1[count];
    if (midPoint + count >= midPoint && midPoint + count < array1.length) {
      half2[count] = array1[midPoint + count];
    }
    count++;
  }
  console.log(`${half1} , ${half2} `);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

/* Easier Way
function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

*/