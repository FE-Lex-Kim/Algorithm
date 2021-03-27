// 0으로 이루어진 N * N 행렬 구현
const matrixFc = (N) => {
  const matrix = [];
  for (let i = 0; i < N; i++) {
    matrix[i] = [];
    for (let j = 0; j < N; j++) {
      matrix[i] = [...matrix[i], 0];
    }
  }
  return matrix;
};

// 6 * 6으로 이루어진 행렬 구현
matrixFc(6);
console.log("matrixFc(6): ", matrixFc(6));
