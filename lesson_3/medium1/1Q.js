function repeatSpace (message, repeat) {
  let count = 0;
  let spaces = "";
  while (count < repeat) {
    spaces = " ".repeat(count);
    console.log(spaces + message);
    count += 1;
  }
}
let sentence = "The Flintstones Rock.";

repeatSpace(sentence,10);

