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

/* 
총평 :
1. 그리디에서 선형적으로 처리해야할때 시간복잡도가 높다면, 스택과 큐를 고려해야한다.
2. 스택은 배열에서 가장 뒤의 값을 지우는 로직을 만드는 경우에 사용한다.
3. 큐는 배열을 반복할때, 현재값을 어떠한 기준으로 해당했을때, 가장 앞에 들어온값을 뺴낼때 사용한다.
 */
