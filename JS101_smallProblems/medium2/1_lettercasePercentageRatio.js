/* eslint-disable max-lines-per-function */
function letterPercentages (sentence) {
  let sentenceSplit = sentence.split("");
  let totalChars = sentenceSplit.length;
  let percentageObj = {
    lowercase : 0,
    uppercase : 0,
    neither : 0,
  };
  sentenceSplit.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      percentageObj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      percentageObj.uppercase += 1;
    } else {
      percentageObj.neither += 1;
    }
  });
  Object.keys(percentageObj).forEach (keys => {
    percentageObj[keys] = (100 * percentageObj[keys] / totalChars).toFixed(2);
  });
  console.log(percentageObj);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }