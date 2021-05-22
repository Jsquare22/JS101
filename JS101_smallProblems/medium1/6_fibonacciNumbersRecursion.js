function fibonacci (nth) {
  let total = 0;
  if (nth === 2 || nth === 1) {
    return 1;
  } else {
    total = fibonacci(nth - 1) + fibonacci(nth - 2);
    return total;
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));      // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765