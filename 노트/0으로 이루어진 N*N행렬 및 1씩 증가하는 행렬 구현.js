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

const matrixFc2 = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i] = [...matrix[i], columns * i + j + 1];
    }
  }
  return matrix;
};

// 6 * 4 으로 이루어진 행렬에서 각각의 값이 순서대로 1씩 증가하며 값이 들어가있음
matrixFc2(6, 4);
/* [
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ],
  [ 17, 18, 19, 20 ],
  [ 21, 22, 23, 24 ]
] */
