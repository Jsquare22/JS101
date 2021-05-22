let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map( subArr => {
  let keys = Object.keys(subArr);
  let pair = [];
  Object.values(subArr).map ((num,index) => {
    pair[keys[index]] = num + 1;
    return pair;
  });
  return pair;
});
console.log(arr2);
console.log(arr);