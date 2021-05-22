function isBalanced (sentence) {
  let leftParentCount = 0;
  let rightParentCount = 0;
  let sentenceArray = sentence.split("");
  for (let index = 0; index < sentenceArray.length - 1; index++) {
    //console.log(sentence[index]);
    if (sentenceArray[index] === "(" && leftParentCount <= rightParentCount + 1) {
      //console.log("left");
      leftParentCount += 1;
    } else if (sentenceArray[index] === ")") {
      //console.log("right");
      rightParentCount += 1;
    }
  }
  //console.log(rightParentCount);
  //console.log(leftParentCount);
  return (rightParentCount === leftParentCount);
}

console.log(isBalanced("What (is) this?") === true);
console.log("-----------------");
console.log(isBalanced("What is) this?") === false);
console.log("-----------------");
console.log(isBalanced("What (is this?") === false);
console.log("-----------------");
console.log(isBalanced("((What) (is this))?") === true);
console.log("-----------------");
console.log(isBalanced("((What)) (is this))?") === false);
console.log("-----------------");
console.log(isBalanced("Hey!") === true);
console.log("-----------------");
console.log(isBalanced(")Hey!(") === false);
console.log("-----------------");
console.log(isBalanced("What ((is))) up(") === false);