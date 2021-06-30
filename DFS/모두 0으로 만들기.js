function solution(a, edges) {
  if (a.every((v) => v === 0)) return 0;
  var answer = 0;
  let graph = Array.from({ length: a.length }, () => []);

  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    graph[a] = [...graph[a], b];
    graph[b] = [...graph[b], a];
  }

  /* 
  룰 : 임의의 연결된 두 점을 골라서 한쪽은 1 증가시키고, 다른 한쪽은 1 감소시킵니다.
  1. 연결되어 있는 인접노드들의 작업이 끝났으면 인접리스트에서 제거해준다
  2. 이때 두개의 노드들를 각각 서로끼리 경로를 지워준다.
  3. 다시 인접노드가 1개인 노드를 찾는다. 이후 1,2번 작업반복
   */

  let countWay = 0;
  while (true) {
    // 인접노드가 1개인 노드를 찾는다.
    for (let i = 0; i < graph.length; i++) {
      const element = graph[i];
      if (element.length === 1) {
        // 현재 노드의 값을 0으로 만들고
        // 해당 인접노드의 값을 그만큼 증가, 감소 시켜준다.
        // 현재 노드의 인접노드의 간선을 제거해준다.
        countWay++;

        let adjNode = element.pop();

        answer += Math.abs(a[i]);

        a[adjNode] = a[adjNode] + a[i];

        a[i] = 0;

        // 이후 해당 인접노드에 현재노드의 간선을 제거해준다.
        graph[adjNode] = graph[adjNode].filter((v) => v !== i);
      }
    }

    // 인접노드 간선을 모두 다 돌았고
    // 만약 a의 가중치 값이 0이 아닌 값이 있으면 0을 반환한다.
    if (countWay === a.length - 1) {
      if (!a.every((v) => v === 0)) {
        return -1;
      }

      // a의 가중치 값이 0이면 answer을 반환한다.
      break;
    }
  }

  return answer;
}

function solution(a, edges) {
  let answer = 0n;

  const graph = new Array(a.length).fill().map((_) => []);
  const visited = new Array(a.length).fill(false);
  let stack = [[0, -1]];

  for (const [a, b] of edges) {
    graph[a] = [...graph[a], b];
    graph[b] = [...graph[b], a];
  }

  while (stack.length) {
    const [start, prev] = stack.pop();

    // 이미 한번 방문을 했다는 의미는 loofNode라는 것을 의미한다.
    if (visited[start]) {
      a[prev] += a[start];
      answer += BigInt(Math.abs(a[start]));
      continue;
    }

    // 루프노드부터 연산하기위해 stack에 push해준다.
    // 루프노드일경우는 아래의 반복문을 수행할때
    // 이미 부모노드는 방문한 상태라 stack에 push될 값이 없어서
    // 루프노드일때 stack에 그대로 가장 위로 올라가 다음 while문 연산때 수행된다.
    stack.push([start, prev]);
    visited[start] = true;

    for (const nextNode of graph[start]) {
      if (!visited[nextNode]) {
        stack.push([nextNode, start]);
      }
    }
  }

  return a[0] ? -1 : answer;
}

console.log(
  solution(
    [-5, 0, 2, 1, 2],
    [
      [0, 1],
      [3, 4],
      [2, 3],
      [0, 3],
    ]
  )
);
