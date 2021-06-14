function solution(N, M, arr, X, K) {
  let matrix = Array.from({ length: N + 1 }, () => []);

  // 노드 개수 N개일때, 2차원 인접행렬 만들기
  // 주의 : 0번째 행과 열을 제외하고 만든 행렬이다.
  // 따라서 1번부터 시작하고 반복문의 종료의 조건은 N+1이다.
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (i === j) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }

  // 2차원 인접행렬 정보 초기화
  // 주의: 인접행렬 정보를 초기화할때 해당 노드들의 정보인 파라미터 배열들안에 0번째 노드가 없다는 조건하에 만든 반복문이다.
  // 항상 1번 노드부터 시작하는 것으로 했을때
  // 만약 1번노드를 0번 노드라고 했을경우 위의 행렬 만들기에서 수정해야한다.
  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i];

    matrix[a][b] = 1;
    matrix[b][a] = 1;
  }

  // 플로이드 워샬 알고리즘으로 인접행렬의 각각 최단거리를 구하기
  // k번째 노드를 들렸을때
  // a번 노드에서 b번 노드로 들릴때
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
