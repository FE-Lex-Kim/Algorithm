function solution(n, a, b) {
  var answer = 0;
  const odd = (n) => {
    return (n + 1) / 2;
  };

  const even = (n) => {
    return n / 2;
  };

  while (a !== b) {
    // a가 홀수인경우
    if (a % 2 === 1) {
      a = odd(a);
    } else if (a % 2 === 0) {
      // a가 짝수 인경우
      a = even(a);
    }

    // b가 홀수인경우
    if (b % 2 === 1) {
      b = odd(b);
    } else if (b % 2 === 0) {
      // b가 짝수 인경우
      b = even(b);
    }
    answer++;
  }

  return answer;
}

solution(8, 4, 7);
