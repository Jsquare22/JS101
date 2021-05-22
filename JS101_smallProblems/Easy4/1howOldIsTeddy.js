function getRandomArbitrary(min, max) {
  // eslint-disable-next-line no-mixed-operators
  return (Math.random() * (max - min + 1) + min);
}

let age = Math.round(getRandomArbitrary(20,120));
console.log(age);

