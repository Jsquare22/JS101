function getGrade (grade1,grade2,grade3) {
  let averageGrade = Math.round((grade1 + grade2 + grade3) / 3);
  if (averageGrade > 90) {
    console.log("A");
  } else if (averageGrade > 80) {
    console.log("B");
  } else if (averageGrade > 70) {
    console.log("C");
  } else if (averageGrade > 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}


getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"