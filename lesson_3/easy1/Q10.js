let advice = "Few things in life are as important as house training your pet dinosaur.";
let index = advice.indexOf("house");
console.log(advice.slice(0,index));

// Expected return value:
// => 'Few things in life are as important as '

// Return a new sentence that stops before house
// Use indexOf to find where house is in the string
// then use slice to cut everything off at and after that index