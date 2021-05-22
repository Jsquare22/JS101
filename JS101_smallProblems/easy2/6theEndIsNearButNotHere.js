function penultimate (str1) {
  let str1Array = str1.split(" ");
  console.log(str1Array[str1Array.length - 2]);
  return str1Array[str1Array.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true