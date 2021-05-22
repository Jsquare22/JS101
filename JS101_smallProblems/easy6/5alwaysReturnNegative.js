function negative(number) {
  if (Math.sign(number) === -1) {
    console.log(number );
  } else {
    console.log(number * -1);
  }
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0