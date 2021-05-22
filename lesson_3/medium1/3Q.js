function factors (number) {
  let factors = [];
  if (number > 0) {
    for (let count = 1; count <= number; count++) {
      if ( number % count === 0) {
        factors.push(number / count);
      }
    }
  }
  console.log(factors);
}

factors(1);
factors(0);
factors(10);