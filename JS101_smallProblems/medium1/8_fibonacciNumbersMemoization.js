let fibNumbers = [1,1];

function fibonacci (nth) {
  let total = 0;
  if (nth <= fibNumbers.length) {
    return fibNumbers[nth - 1];
  } else {
    total = fibonacci(nth - 1) + fibonacci(nth - 2);
    fibNumbers.push(total);
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
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
