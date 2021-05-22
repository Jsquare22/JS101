function triangle (size) {
  let count = 0;
  let triangle = "";
  while (count < size) {
    triangle += `${" ".repeat(size - count)}${"*".repeat(count)}\n`;
    count += 1;
  }
  console.log(triangle);
}

triangle(5);
triangle(9);