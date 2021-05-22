function fridayThe13ths (year) {
  var count = 0;
  for (let month = 0; month < 12; month++) {
    let trackingDate = new Date(year,month,13);
    if (trackingDate.getDay() === 5) {
      count++;
    }
  }
  console.log(count);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2