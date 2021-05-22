let numbers = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];
numbers.splice(0);
numbers2.length = 0;
while (numbers3.length) {
  numbers3.pop();
}
numbers2.shift();
console.log(numbers);
console.log(numbers2);
console.log(numbers3);


// Three ways to revmoe all of the elements from the array