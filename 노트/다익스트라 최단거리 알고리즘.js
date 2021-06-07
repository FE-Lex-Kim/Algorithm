function solution(N, road) {
  // 변수 준비물 3가지
  let graph = Array.from({ length: N + 1 }, () => []);
  let visited = Array.from({ length: N + 1 }, () => false);
  let distance = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER);
  distance[0] = "dont'see";

  // 그래프 초기화
  for (let i = 0; i < road.length; i++) {
    const element = road[i];
    graph[element[0]].push([element[1], element[2]]);
    graph[element[1]].push([element[0], element[2]]);
  }
  console.log(graph);

  // 함수 준비물 1가지
  // 방문하지 않은 노드중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
  const getSmallestNode = () => {
    let min = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 1; i < N + 1; i++) {
      const element = visited[i];
      if (!element && distance[i] < min) {
        min = distance[i];
        index = i;
      }
    }

    return index;
  };

  // 다익스트라 시작 노드를 매개변수값으로 넣는다.
  const dijkstra = (start) => {
    // 시작노드 초기화
    visited[start] = true;
    distance[start] = 0;

    // startNode의 인접 노드의 최단거리 값(distance)을 갱신
    for (let i = 0; i < graph[start].length; i++) {
      const element = graph[start][i];
      distance[element[0]] = element[1];
    }

    // 시작 노드를 제외한 전체 n - 1개의 노드에 대해 반복
    for (let i = 0; i < N - 1; i++) {
      // 방문하지 않은 노드중 가장 짧은 거리를 가진 노드를 현재 노드로 선정
      let now = getSmallestNode();
      // 방문한 노드로 갱신
      visited[now] = true;
      // 현재 노드에서 인접노드중 최단거리가 있는지 확인후 갱신
      for (let i = 0; i < graph[now].length; i++) {
        const element = graph[now][i];
        // 현재 노드에서 다음 노드로 가는 거리
        const cost = distance[now] + element[1];
        // 다음노드의 최단거리 와 현재노드에서 다음노드로 가는 거리 를 비교
        if (cost < distance[element[0]]) {
          distance[element[0]] = cost;
        }
      }
    }
  };

  dijkstra(1);
}

solution(5, [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
]);
