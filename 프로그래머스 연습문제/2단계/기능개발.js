function solution(progresses, speeds) {
  var answer = [];
  progresses = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  // 1. count = 1
  // 2-1. 만약 현재요소보다 뒤의 요소중 작은 값들의 요소들의 개수를 count한다.
  // 2-2  만약 현재 요소보다 값이 큰요소가 있으면 count를 더해주지 않고 answer에 push한후 멈춘다.
  // 3. 현재요소보다 큰 값인 요소부터 반복문을 다시 시작한다.
  //    -> shift를 해주면서 count값을 증가시켜주면 된다.
  const countSmall = (cur) => {
    let count = 1;
    while (0 < progresses.length) {
      let nx = progresses.shift();
      if (nx <= cur) {
        count++;
      } else {
        progresses.unshift(nx);
        return count;
      }
    }
    return count;
  };

  while (0 < progresses.length) {
    let cur = progresses.shift();
    answer.push(countSmall(cur));
  }

  return answer;
}

console.log(solution([1], [99]));
