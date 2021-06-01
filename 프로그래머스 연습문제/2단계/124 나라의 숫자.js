function solution(n) {
  let answer = "";
  while (0 < n) {
    if (n % 3 === 0) {
      answer = 4 + answer;
      n = Math.floor(n / 3) - 1;
      continue;
    }
    answer = (n % 3) + answer;
    n = Math.floor(n / 3);
  }
  return answer;
}

console.log(solution(20));
