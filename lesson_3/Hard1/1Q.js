function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return;
  // eslint-disable-next-line no-unreachable
  {
    // eslint-disable-next-line no-unused-expressions
    "hi there";
  }
}

console.log(first());
console.log(second());

// Output: Second call returns nothing so we get undefinied.