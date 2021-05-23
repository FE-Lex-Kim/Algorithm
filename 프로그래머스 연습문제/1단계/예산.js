function solution(d, budget) {
  var answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (budget < sum) {
      return i;
    }
  }

  return d.length;
}

console.log(solution([1, 3, 2, 5, 4], 9));
