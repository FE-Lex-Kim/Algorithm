function solution(n) {
  var answer = [];
  const hanoi = (n, from, temp, to) => {
    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n - 1, from, to, temp);
      answer.push([from, to]);
      hanoi(n - 1, temp, from, to);
    }
  };

  hanoi(n, 1, 2, 3);
  return answer;
}

solution(2);
