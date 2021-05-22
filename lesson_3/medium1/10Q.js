function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));

//output: no. Param = is the default value but it only uses it once
// on the first function call.