function rotateArray (array1) {
  let swapped = [];
  if (typeof (array1) !== "object") {
    console.log(undefined);
  } else if ( array1.length < 1) {
    console.log(array1);
  } else {
    // eslint-disable-next-line no-unused-vars
    swapped = array1.map ((number,index) => {
      if (index < array1.length - 1) {
        return array1[index + 1];
      } else  {
        return array1[0];
      }
    });
  }
  console.log(swapped);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []


// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]