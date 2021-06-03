function solution(s) {
  if (!s.length % 2) {
    return 0;
  }
  s = [...s];
  let stack = [];
  while (0 < s.length) {
    let shift = s.shift();
    if (stack.length === 0) {
      stack.push(shift);
    } else {
      let pop = stack.pop();
      if (pop !== shift) {
        stack.push(pop);
        stack.push(shift);
      }
    }
    if (s.length < stack.length) {
      return 0;
    }
  }
  console.log(stack);
  return stack.length ? 0 : 1;
}

function solution(s) {
  if (!s.length % 2) {
    return 0;
  }
  s = [...s];
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (stack[stack.length - 1] !== cur) {
      stack.push(cur);
    } else {
      stack.pop();
    }
    if (s.length < stack.length) {
      return 0;
    }
  }

  return stack.length ? 0 : 1;
}
solution("baabaa");
