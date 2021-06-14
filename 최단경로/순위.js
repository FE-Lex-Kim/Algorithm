function solution(n, results) {
  var answer = 0;
  let matrix = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === j) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }

  for (let i = 0; i < results.length; i++) {
    const [a, b] = results[i];
    matrix[a][b] = 0;
  }

  // 다른 경로로 갈 수 있는지를 확인함
  // 다른 경로로 갈 수 있다면 0으로 표시함
  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
      }
    }
  }

  for (let curNode = 1; curNode < n + 1; curNode++) {
    let adjNodeCount = 1;
    for (let adjNode = 1; adjNode < n + 1; adjNode++) {
      if (curNode !== adjNode) {
        if (matrix[curNode][adjNode] === 0) {
          adjNodeCount++;
        }

        if (matrix[adjNode][curNode] === 0) {
          adjNodeCount++;
        }
      }
    }

    if (adjNodeCount === n) answer++;
  }

  return answer;
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]);
