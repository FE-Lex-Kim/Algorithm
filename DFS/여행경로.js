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
  return answer.sort()[0];
}

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);

// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
// [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]
