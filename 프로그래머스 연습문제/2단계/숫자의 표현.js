function solution(n) {
  var answer = 1;

  for (let i = 2; i < n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += j;
    }
    if (n < sum) {
      return answer;
    }
    if ((n - sum) % i === 0) {
      answer++;
    }
  }

  return answer;
}

solution(15);
