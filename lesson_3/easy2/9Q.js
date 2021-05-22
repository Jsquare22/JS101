let title = "Flintstone Family Members";
const LENGTH_OF_TABLE = 40;
let middle = Math.floor((LENGTH_OF_TABLE - title.length) / 2);
let paddedTitle = title.padStart(middle + title.length);
console.log(paddedTitle);