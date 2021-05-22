/* eslint-disable consistent-return */
// eslint-disable-next-line array-callback-return
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// Output: undefined and bear. Map maps the array according to the return