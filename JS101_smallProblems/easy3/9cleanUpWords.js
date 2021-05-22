function cleanUp (word) {
  //const regex = /^[a-zA-Z ]+$/;
  const regex = /[A-Za-z ]/gi;
  let found = word.match(regex);
  console.log(found);
  let clean = found.join("");
  console.log(clean);
}

cleanUp("---what's my +*& line?");    // " what s my line "