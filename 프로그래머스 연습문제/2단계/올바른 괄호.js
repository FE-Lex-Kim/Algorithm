function solution(s) {
  let arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    let cur = s[i];
    if (cur === "(") {
      arr.push(cur);
    } else {
      let last = arr.pop();
      if (last === "(") {
        continue;
      } else if (last === ")") {
        arr.push(last, cur);
      }
    }
  }

  return !arr.length;
}

console.log(solution("(())()"));
