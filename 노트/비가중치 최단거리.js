function solution(n, edge) {
  // 준비물 변수 4가지
  // 1. 노드들 간의 정보가 있는 graph
  // 2. 스타팅 노드 부터 최단거리에 대한 정보가 있는 distance
  // 3. 방문했는지 체크하는 visited
  // 4. queue
  let graph = Array.from({ length: n + 1 }, () => []);
  let distance = Array.from({ length: n + 1 }, () => 0);
  let visited = Array.from({ length: n + 1 }, () => false);
  let queue = [];

  // 그래프 정보 초기화
  graph[0] = "Never mind";
  for (let i = 0; i < edge.length; i++) {
    let [a, b] = edge[i];
    graph[a] = [...graph[a], b];
    graph[b] = [...graph[b], a];
  }

  // 큐 초기화 및 starting 노드 visited 초기화
  queue.push(1);
  visited[1] = true;

  while (queue.length) {
    // 1. 현재 노드를 shift해준다.
    let node = queue.shift();
    for (let i = 0; i < graph[node].length; i++) {
      let adjNode = graph[node][i];

      // 2. 인접노드를 방문하지 않았다면 해당 노드를 queue에 넣어준다.
      if (!visited[adjNode]) {
        queue.push(adjNode);

        // 3. 해당 인접노드를 현재 노드 기준으로 거리에서 +1해준다.
        distance[adjNode] = distance[node] + 1;

        // 4. queue에 넣은 인접노드를 방문한 노드로 처리해준다.
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
