// eslint-disable-next-line array-callback-return
[1, 2, 3].map(num => {
  // eslint-disable-next-line no-unused-expressions
  num * num;
});

// Output: [ undefined, undefined, undefined ]
// This is because there is no return in the statement