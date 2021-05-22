let numbers = [1,2,3,4,5];
let reversedNums = numbers.slice().reverse();
console.log(reversedNums);


let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// Reverse the list without mutating the original array