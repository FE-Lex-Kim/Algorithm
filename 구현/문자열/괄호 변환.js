function solution(p) {
  var answer = "";

  const check = (str) => {
    let stack = [];
    for (const letter of str) {
      const last = stack[stack.length - 1];
      if (last === "(" && letter === ")") {
        stack.pop();
      } else {
        stack.push(letter);
      }
    }

    return stack.length ? false : true;
  };

  const reverse = (str) => {
    let result = "";

    for (const letter of str) {
      if (letter === "(") {
        result += ")";
      } else {
        result += "(";
      }
    }

    return result;
  };

  const recursive = (p) => {
    if (p === "") return "";
    let count = 0;
    let u = "";
    let v = "";

    for (let i = 0; i < p.length; i++) {
      let letter = p[i];
      if (letter === "(") {
        count++;
      } else {
        count--;
      }

      u += letter;

      if (count === 0) {
        v = p.slice(i + 1);
        break;
      }
    }

    if (check(u)) {
      return u + recursive(v);
    } else {
      const result = "(" + recursive(v) + ")";
      const cutReverse = reverse(u.slice(1, u.length - 1));
      return result + cutReverse;
    }
  };

  return recursive(p);
}

solution("(()())()");
