function solution(n, edge) {
  let graph = Array.from({ length: n + 1 }, () => []);
  let distance = Array.from({ length: n + 1 }, () => 0);
  let visited = Array.from({ length: n + 1 }, () => false);
  let queue = [];

  graph[0] = "Never mind";
  for (let i = 0; i < edge.length; i++) {
    let [a, b] = edge[i];
    graph[a] = [...graph[a], b];
    graph[b] = [...graph[b], a];
  }

  // 1. 현재 노드를 shift해준뒤
  // 2. 인접노드를 방문하지 않았다면 해당 노드를 queue에 넣어준다.
  // 3. 해당 인접노드를 현재 노드 기준으로 거리에서 +1해준다.
  // 4. queue에 넣은 인접노드를 방문한 노드로 처리해준다.

  // 큐 초기화
  queue.push(1);
  visited[1] = true;

  while (queue.length) {
    let node = queue.shift();
    for (let i = 0; i < graph[node].length; i++) {
      let adjNode = graph[node][i];
      if (!visited[adjNode]) {
        queue.push(adjNode);
        distance[adjNode] = distance[node] + 1;
        visited[adjNode] = true;
      }
    }
  }

  let max = Math.max(...distance);
  let answer = distance.filter((v) => v === max).length;

  return answer;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
