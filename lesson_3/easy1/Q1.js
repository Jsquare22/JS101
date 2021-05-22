let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]);  // what will this line return?

// output: This will run without errors. 3,4,5 in the array will be empty
// returns undefinied due to JS treating those slots as empty