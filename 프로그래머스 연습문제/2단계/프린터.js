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

/* 
총평: 
1. 우선순위큐라는 것을 고려하지못했음.
2. some이라는 메서드 고려하지 않았음.
3. 현재 문제에대한 로직이 어떻게 흘러가는지 하나하나 잘게 쪼개어서 생각해보기
4. 3번이 현실적으로 가능한 구현이라면, 어떤식으로 코드를 작성할지 다양한 메소드 고려해보기.
5. 노트에 어떤식으로 로직이 흘러가는지 단계별로 그려가면서 하면 굉장히 가독성이 좋고 로직짜기 좋음
6. 특히, 큐, 스택, 그래프 문제는 반드시 노트에 그려서 단계별로 구상해보기.
 */
