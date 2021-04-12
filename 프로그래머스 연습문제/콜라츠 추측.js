function solution(num) {
  var answer = 0;
  while (num !== 1) {
    // 만약 짝수 인경우에는 /2를 해준다.
    if (num % 2 === 0) {
      num = num / 2;
      answer++;
      continue;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  }

  return 500 < answer ? -1 : answer;
}

console.log(solution(626331));
