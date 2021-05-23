function solution(arr) {
  var answer = 0;

  answer = arr.reduce(
    (acc, cur, i) => (i === arr.length - 1 ? (acc + cur) / (i + 1) : acc + cur),
    0
  );
  return answer;
}

console.log(solution([1, 2, 3, 4]));
