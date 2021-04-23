/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let answer = "";
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      answer += "G";
    } else if (command[i] === "(" && command[i + 1] === ")") {
      answer += "o";
      i++;
    } else if (command.slice(i, i + 4) === "(al)") {
      answer += "al";
      i += 3;
    }
  }

  return answer;
};

// nice solution
var interpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
};

console.log(interpret("(al)G(al)()()G"));
