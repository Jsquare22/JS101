function isColorValid(color) {
  let bool = 0;
  if (color === "blue" || color === "green") {
    bool = 1;
  } else {
    bool = 0;
  }
  return bool;
}

function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid = color => ["blue", "green"].includes(color);