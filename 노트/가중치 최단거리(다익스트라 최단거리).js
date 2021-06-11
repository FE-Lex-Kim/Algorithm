// 다익스트라
function solution(N, road, K) {
  let answer = 0;
  // 변수
  let queqe = [];
  let graph = Array.from({ length: N + 1 }, () => []);
  let distance = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER);

  // 초기화 작업
  // 1. 그래프 정보 초기화
  for (const ele of road) {
    let a = ele[0];
    let b = ele[1];
    let c = ele[2];
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const dijkstra = (startNode) => {
    // 2. 시작노드 최단거리 초기화
    distance[0] = "Never mind";
    distance[startNode] = 0;

    // 3. 큐 안에 시작노드 초기화
    queqe.push(startNode);

    while (queqe.length) {
      let node = queqe.shift();

      for (const [adjNode, adjTime] of graph[node]) {
        if (distance[node] + adjTime < distance[adjNode]) {
          distance[adjNode] = distance[node] + adjTime;
          queqe.push(adjNode);
        }
      }
    }
  };

  dijkstra(1);

  for (const time of distance) {
    if (time <= K) answer++;
  }

  return answer;
}

solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);

/* 
    가장 작은 최단거리 노드부터 방문하는 이유는
    가장 작은 노드를 갱신한 즉시 해당 노드의 인접노드의 최단거리도 자동으로 최단거리로 갱신되어 질것이다.
    이때 최단거리가 가장 작은 노드를 먼저 꺼내서 이 작업을 해주면 그렇지 않았을때와 다르게 가장 작을 때부터 작업을 하므로
    먼저 인접노드들이 가장 최단거리가 짧은 값을 기준으로 갱신되기에 그 인접노드들도 짧게 갱신된다.
    
    만약 그 반대로 아예 최단거리가 갱신된 노드들 중에 가장 최단거리가 긴 노드부터 방문을 한다면
    그 인접노드들 갱신한다면 만약 이후에 최단거리가 더 짧은 노드의 인접한 노드와 공통된다라고 하면 또다시 갱신하는 작업을 거쳐야하므로
    가장 짧은 노드를 먼저 하는게 효율성이 높다.
    */
