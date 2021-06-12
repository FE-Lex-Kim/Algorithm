function solution(n, computers) {
  var answer = 0;
  let graph = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);

  graph[0] = ["Never mind"];
  // 그래프 정보
  for (let i = 0; i < computers.length; i++) {
    const node = computers[i];
    for (let j = 0; j < computers[i].length; j++) {
      const adjNode = computers[i][j];
      if (i !== j) {
        if (adjNode === 1) {
          graph[i + 1].push(j + 1);
        }
      }
    }
  }
  console.log("graph", graph);
  const dfs = (node) => {
    // 인접노드중 방문하지 않은 노드를 모두 방문한다.
    for (let i = 0; i < graph[node].length; i++) {
      let adjNode = graph[node][i];
      if (!visited[adjNode]) {
        visited[adjNode] = true;
        dfs(adjNode);
      }
    }
  };

  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) {
      const node = graph[i];
      answer++;
      for (let j = 0; j < node.length; j++) {
        const adjNode = node[j];
        if (!visited[adjNode]) {
          visited[adjNode] = true;
          dfs(adjNode);
        }
      }
    }
  }

  console.log(answer);

  return answer;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
