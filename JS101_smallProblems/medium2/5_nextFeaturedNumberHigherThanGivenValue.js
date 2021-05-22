/* eslint-disable max-lines-per-function */
const MAX_NUM = 9876543201;
function featured (number) {
  let featuredNumber = number + 1;
  let numberFound = true;
  // eslint-disable-next-line no-unmodified-loop-condition
  while (numberFound && number < MAX_NUM) {
    if (featuredNumber % 2 > 0) {
      if (featuredNumber % 7 === 0) {
        if (numbersDifferent (featuredNumber)) {
          //console.log("-------" + featuredNumber);
          numberFound = false;
        } else {
          featuredNumber += 1;
        }
      } else {
        featuredNumber += 1;
      }
    } else {
      featuredNumber += 1;
    }
  }
  console.log(featuredNumber);
  if (number === MAX_NUM) {
    console.log(" There is no next featured number.");
  }
}

function numbersDifferent (number) {
  let numbers = number.toString().split("");
  let trackingNumbers = [];
  let diffNums = true;
  let count = 0;
  while (diffNums) {
    if (trackingNumbers.includes(numbers[count])) {
      diffNums = false;
    } else {
      trackingNumbers.push(numbers[count]);
      diffNums = true;
      count++;
      if (count >= numbers.length) {
        break;
      }
    }
  }
  return diffNums;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
//console.log(numbersDifferent(1015));
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);
// "There is no possible number that fulfills those requirements."