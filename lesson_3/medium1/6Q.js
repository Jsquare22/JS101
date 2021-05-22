let nanArray = [NaN];

// eslint-disable-next-line use-isnan
console.log(nanArray[0] === NaN);
console.log(Number.isNaN(nanArray[0]));


// NAN is used for Not A Number. Returned number failed.
// Doesn't work here because you can't compare with a NAN.