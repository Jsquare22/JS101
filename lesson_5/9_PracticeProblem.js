let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.forEach (arr2 => {
  if (typeof (arr2[0]) === "string") {
    arr2.sort();
  } else {
    arr2.sort ((a,b) => a - b);
  }

});

console.log(arr);