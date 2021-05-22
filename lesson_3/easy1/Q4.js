let munstersDescription = "the Munsters are CREEPY and Spooky.";
munstersDescription =  munstersDescription.charAt(0).toUpperCase()
 + munstersDescription.slice(1).toLowerCase();
console.log(munstersDescription);
// => The munsters are creepy and spooky.


// Return the setence lower case except for the first letter
// use charAt(0) to get the first character than append
// the last part with splice()