/* eslint-disable consistent-return */
// eslint-disable-next-line no-unused-vars
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  console.log(arr);
  // eslint-disable-next-line array-callback-return
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});