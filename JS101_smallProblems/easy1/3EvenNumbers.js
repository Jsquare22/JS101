function displayOdds (start,end) {
  while (start <= end) {
    if ( start % 2 === 0) {
      console.log(start);
    }
    start += 1;
  }
}

displayOdds(1,99);