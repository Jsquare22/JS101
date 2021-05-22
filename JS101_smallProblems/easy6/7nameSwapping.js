function swapName (name) {
  let nameArray = name.split(" ");
  let tempArray = nameArray[0];
  nameArray[0] = nameArray[1];
  nameArray[1] = tempArray;
  console.log(nameArray.join(", "));
}

swapName('Joe Roberts');    // "Roberts, Joe"