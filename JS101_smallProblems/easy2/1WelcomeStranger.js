
function greetings (name,job) {
  return `Hello,${name.join(" ")}! Nice to have a ${job.title} and ${job.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.