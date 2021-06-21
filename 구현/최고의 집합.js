function solution(n, s) {
  if (s < n) {
    return [-1];
  }
  var answer = [];
  let divide = Math.floor(s / n);
  let left = s % n;
  for (let i = 0; i < n - left; i++) {
    answer.push(divide);
  }

  for (let i = 0; i < left; i++) {
    answer.push(divide + 1);
  }
  return answer;
}

solution(5, 8);
