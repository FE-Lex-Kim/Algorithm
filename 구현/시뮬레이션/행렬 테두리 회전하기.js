function solution(rows, columns, queries) {
  const matrixFc = (rows, columns) => {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < columns; j++) {
        matrix[i] = [...matrix[i], columns * i + j + 1];
      }
    }
    return matrix;
  };

  let answer = [];
  var matrix = matrixFc(rows, columns);

  for (let i = 0; i < queries.length; i++) {
    let [x, y, nx, ny] = queries[i];
    let min = Number.MAX_SAFE_INTEGER;
    let nxValue = matrix[x - 1][y - 1];

    for (let i = y - 1; i < ny - 1; i++) {
      min = Math.min(nxValue, min);
      [matrix[x - 1][i + 1], nxValue] = [nxValue, matrix[x - 1][i + 1]];
    }

    for (let i = x - 1; i < nx - 1; i++) {
      min = Math.min(nxValue, min);
      [matrix[i + 1][ny - 1], nxValue] = [nxValue, matrix[i + 1][ny - 1]];
    }

    for (let i = ny - 1; y - 1 < i; i--) {
      min = Math.min(nxValue, min);
      [matrix[nx - 1][i - 1], nxValue] = [nxValue, matrix[nx - 1][i - 1]];
    }

    for (let i = nx - 1; x - 1 < i; i--) {
      min = Math.min(nxValue, min);
      [matrix[i - 1][y - 1], nxValue] = [nxValue, matrix[i - 1][y - 1]];
    }

    answer.push(min);
  }

  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
