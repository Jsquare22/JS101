function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let array1 = [];
let array2 = [];
array1 = addToRollingBuffer1(array1,3,1);
array1 = addToRollingBuffer1(array1,3,2);
array1 = addToRollingBuffer1(array1,3,3);
array1 = addToRollingBuffer1(array1,3,4);
console.log(array1);

array2 = addToRollingBuffer2(array2,3,1);
array2 = addToRollingBuffer2(array2,3,2);
array2 = addToRollingBuffer2(array2,3,3);
array2 = addToRollingBuffer2(array2,3,4);
console.log(array2);

// output: What is the difference between these two?
// same output but push mutates the array while concat doesn't