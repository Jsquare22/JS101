function century (year) {
  let cent = Math.ceil(year / 100);
  let endPhrase = "";
  let centString = cent.toString();
  if (cent < 10 || cent > 19) {
    endPhrase = endCheck(cent,centString[centString.length - 1]);
  } else {
    endPhrase = "th";
  }


  console.log(`${cent}${endPhrase}`);
}

function endCheck (centur,lastDigit) {
  let ending = "";
  if (lastDigit === "1") {
    ending = "st";
  } else if (lastDigit === "2") {
    ending = "nd";
  } else if (lastDigit === "3" && centur < 10) {
    ending = "rd";
  } else {
    ending = "th";
  }
  return ending;
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"