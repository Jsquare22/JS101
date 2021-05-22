function xor (in1,in2) {
  let bool = false;
  if (in1) {
    if (in2) {
      bool = false;
    } else bool = true;
  } else if (in2) {
    if (in1) {
      bool = false;
    } else bool = true;
  }
  console.log(bool);
  return bool;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);