function solution(s) {
  const countAnswer = (s) => {
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
      const element = s[i];
      const last = stack[stack.length - 1];
      if (last === "[") {
        if (element === "]") {
          stack.pop();
        } else {
          stack.push(element);
        }
      } else if (last === "(") {
        if (element === ")") {
          stack.pop();
        } else {
          stack.push(element);
        }
      } else if (last === "{") {
        if (element === "}") {
          stack.pop();
        } else {
          stack.push(element);
        }
      } else {
        stack.push(element);
      }
    }

    return stack.length === 0 ? 1 : 0;
  };

  s = s.split("");
  var answer = 0;

  answer += countAnswer(s);

  for (let i = 0; i < s.length - 1; i++) {
    let node = s.shift();
    s.push(node);
    answer += countAnswer(s);
  }

  return answer;
}

solution("[)(]");
