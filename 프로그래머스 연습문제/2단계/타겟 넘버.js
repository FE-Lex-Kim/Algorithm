function solution(numbers, target) {
  let answer = 0;
  const dfs = (x, value) => {
    if (x === numbers.length) {
      if (value === target) {
        answer++;
      }
    } else {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    }
  };
  dfs(0, 0);

  return answer;
}

solution([1, 1, 1, 1, 1], 3);
