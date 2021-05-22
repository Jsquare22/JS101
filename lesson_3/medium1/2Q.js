let munstersDescription = "The Munsters are creepy and spooky.";
swapCase(munstersDescription);

function swapCase (sentence) {
  let charArray = sentence.split("");
  for (let index = 0; index < charArray.length - 1; index++) {
    if (charArray[index] === charArray[index].toUpperCase()) {
      charArray[index] = charArray[index].toLowerCase();
    } else if (charArray[index] === charArray[index].toLowerCase()) {
      charArray[index] = charArray[index].toUpperCase();
    }
  }
  sentence = charArray.join("");
  console.log(sentence);
}