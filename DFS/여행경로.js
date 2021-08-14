function solution(tickets) {
  let answer = [];
  let visited = Array.from({ length: tickets.length }, () => false);

  const dfs = (start, path, count) => {
    if (count === tickets.length) {
      answer.push(path);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      let [from, to] = tickets[i];
      if (visited[i] === false && from === start) {
        visited[i] = true;
        dfs(to, [...path, to], count + 1);
        visited[i] = false;
      }
    }
  };

  dfs("ICN", ["ICN"], 0);
  console.log(answer);
  return answer.sort()[0];
}

// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
// [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);

function solution2(tickets) {
  let answer = [];

  let graph = {};
  let visited = Array.from({ length: tickets.length }, () => false);

  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    graph[from] ? graph[from].push(i) : (graph[from] = [i]);
  }

  const dfs = (from, count, route, total) => {
    if (count === tickets.length) {
      return total.push(route);
    }

    if (!graph[from]) return;

    for (const n of graph[from]) {
      // 방문하지 않은 간선이라면 방문한다.
      if (!visited[n]) {
        visited[n] = true;
        // 다음에 방문할 노드
        dfs(tickets[n][1], count + 1, [...route, tickets[n][1]], total);

        visited[n] = false;
      }
    }

    return total;
  };

  answer = dfs("ICN", 0, ["ICN"], []).sort()[0];
  return answer;
}
