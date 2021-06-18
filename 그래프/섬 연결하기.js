function solution(n, costs) {
  var answer = [];
  let graph = new Map();
  let visited = {};

  for (const [a, b, cost] of costs) {
    if (!graph.has(a)) {
      graph.set(a, [[b, cost]]);
      visited[a] = false;
    } else {
      graph.set(a, [...graph.get(a), [b, cost]]);
    }

    if (!graph.has(b)) {
      graph.set(b, [[a, cost]]);
      visited[b] = false;
    } else {
      graph.set(b, [...graph.get(b), [a, cost]]);
    }
  }

  const dfs = (startNode, totalCost, count) => {
    visited[startNode] = true;
    if (count === graph.size - 1) {
      answer.push(totalCost);
      return;
    }

    let adjNodeList = graph.get(startNode);
    for (const [adjNode, cost] of adjNodeList) {
      if (!visited[adjNode]) {
        dfs(adjNode, totalCost + cost, count + 1);
        visited[adjNode] = false;
      }
    }
    visited[startNode] = false;
  };

  let nodeList = [...graph.keys()];

  for (const node of nodeList) {
    dfs(node, 0, 0);
  }

  console.log(answer);

  return Math.min(...answer);
}

solution(5, [
  [0, 1, 5],
  [0, 3, 2],
  [0, 4, 3],
  [1, 4, 1],
  [3, 4, 10],
  [1, 2, 2],
  [2, 5, 3],
  [4, 5, 4],
]);
