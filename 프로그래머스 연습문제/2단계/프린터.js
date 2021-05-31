function solution(priorities, location) {
  let answer = 1;
  priorities = priorities.map((v, i) => ({ v, i }));

  while (true) {
    let node = priorities.shift();

    // priorities 가장 앞의 우선순위 보다 더 큰값이 뒤의 값에 있다면
    if (priorities.some((obj) => obj.v > node.v)) {
      // 해당 요소를 priorities의 가장 뒷부분에 넣어준다.
      priorities.push(node);
    } else {
      // 만약 해당 요소가 가장 운선순위가 높은값이라면
      // 해당 요소가 location과 같은 인덱스인지 확인한다.
      // 만약 맞다면 answer 값을 return 해준다.
      if (node.i === location) {
        return answer;
      }

      // 해당 요소가 가장 우선순위가 크지만 location이 아니라면
      // 해당 요소를 priorities에서 제외해주고
      // answer 값을 1증가 시켜준다.
      answer++;
    }
  }
}

console.log(solution([1, 1, 1, 9, 1], 2));
