let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
for (let monster in munsters) {
  console.log(`${monster} is a ${munsters[monster].age}-year old ${munsters[monster].gender}`);
}
