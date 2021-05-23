function solution(left, right) {
  var answer = 0;
  const fc = (n) => {
    let count = 1;
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }

    return count;
  };
  for (let i = left; i <= right; i++) {
    if (fc(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

solution(24, 27);
