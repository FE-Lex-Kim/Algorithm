function solution(N, M, arr, X, K) {
  let matrix = Array.from({ length: N + 1 }, () => []);

  // 2차원 인접행렬 만들기
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (i === j) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }

  // 2차원 인접행렬 초기화
  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i];

    matrix[a][b] = 1;
    matrix[b][a] = 1;
  }

  // 플로이드 워샬 알고리즘으로 인접행렬의 각각 최단거리를 구하기
  for (let k = 1; k < N + 1; k++) {
    for (let a = 1; a < N + 1; a++) {
      for (let b = 1; b < N + 1; b++) {
        matrix[a][b] = Math.min(matrix[a][b], matrix[a][k] + matrix[k][b]);
      }
    }
  }

  // 1번 노드에서 K노드까지 거리 + k노드에서 X노드까지의 거리
  let answer = matrix[1][K] + matrix[K][X];

  if (answer === Infinity) {
    return -1;
  }

  console.log(answer);
  return answer;
}

solution(
  5,
  7,
  [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
  ],
  4,
  5
);
