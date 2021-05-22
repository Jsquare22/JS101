/* eslint-disable max-lines-per-function */
function triangle (angle1,angle2,angle3) {
  let angleArray = [angle1,angle2,angle3];
  let sum = angleArray.reduce((accum, curr) => accum + curr);
  if (sum === 180 && angleArray.every(currValue => currValue > 0)) {
    if (angleArray.every(currentAngle => currentAngle < 90)) {
      console.log("Acute");
    } else if (angleArray.includes(90)) {
      console.log("Right");
    } else {
      console.log("Obtuse");
    }
  } else {
    console.log("invalid");
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"