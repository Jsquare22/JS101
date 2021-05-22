function triangle (side1,side2,side3) {
  let sideArray = [side1,side2,side3].sort((a,b) => a - b);
  let sideEqualCount = 0;
  if (sideArray[0] + sideArray[1] > sideArray[2]) {
    sideArray.forEach (side => {
      if (side === side1) {
        sideEqualCount += 1;
      }
    });
    if (sideEqualCount === 1) {
      console.log("Scalene");
    } else if (sideEqualCount === 2) {
      console.log("Isosceles");
    } else if (sideEqualCount === 3) {
      console.log("equilateral");
    }
  } else {
    console.log("invalid");
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"