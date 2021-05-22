let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = [].concat(...flintstones);

//flintstones.splice(flintstones.length,0,"Barney","Betty","Bambam","Pebbles");
console.log(flintstones);