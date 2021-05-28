function solution(number, k) {
  let stack = [+number[0]];
  for (let i = 1; i < number.length; i++) {
    let cur = +number[i];

    while (0 <= stack.length && stack[stack.length - 1] <= cur && 0 < k) {
      stack.pop();
      k--;
    }

    stack.push(cur);
  }

  for (let j = 0; j < k; j++) {
    stack.pop();
  }

  return stack.join("");
}
console.log(solution("1231234", 3));
