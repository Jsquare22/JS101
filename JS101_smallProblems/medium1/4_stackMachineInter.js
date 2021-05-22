/* eslint-disable max-lines-per-function */
function minilang (instrucitons) {
  let wordsInstructs = instrucitons.split(" ");
  let register = 0;
  let stack = [];
  let popValue = 0;
  wordsInstructs.forEach(word => {
    //console.log(word);
    if (!isNaN(Number(word))) {
      register = Number(word);
    } else  switch  (word) {
      case 'PRINT' :
        console.log(register);
        break;
      case 'PUSH' :
        stack.push(register);
        break;
      case 'ADD' :
        popValue = stack.pop();
        register += popValue;
        break;
      case 'SUB' :
        popValue = stack.pop();
        register -= popValue;
        break;
      case 'MULT' :
        popValue = stack.pop();
        register *= popValue;
        break;
      case 'DIV' :
        popValue = stack.pop();
        register = Math.floor(register / popValue);
        break;
      case 'REMAINDER' :
        popValue = stack.pop();
        register %= popValue;
        break;
      case 'POP' :
        popValue = stack.pop();
        register = popValue;
    }
  });
  console.log("------------------------");
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

