function solution(n) {
  var answer = 0;

  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

solution(12); // 1,2,3,4,6,12 -> 28
