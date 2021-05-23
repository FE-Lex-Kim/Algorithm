function solution(n) {
  var answer = 0;
  const strN = `${n}`;

  for (let i = 0; i < strN.length; i++) {
    answer += +strN[i];
  }

  return answer;
}

solution(123); // 6
