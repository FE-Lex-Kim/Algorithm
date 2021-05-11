/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, i, j, newColor) {
  let startColor = image[i][j];
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || image.length <= i || image[0].length <= j) {
      return;
    }
    if (image[i][j] !== startColor) {
      return;
    }

    if (image[i][j] === startColor) {
      image[i][j] = newColor;
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };

  dfs(i, j);

  return image;
};

var floodFill = function (image, i, j, newColor) {
  if (image[i][j] === newColor) {
    return image;
  }
  let startColor = image[i][j];
  let stack = [[i, j]];
  while (0 < stack.length) {
    let node = stack.pop();
    let [x, y] = node;
    // 상하좌우
    let arr = [
      [-1, 0], // 상
      [1, 0], // 하
      [0, 1], // 우
      [0, -1], // 좌
    ];

    if (image[x][y] === startColor) {
      image[x][y] = newColor;
      for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        let nextX = x + cur[0];
        let nextY = y + cur[1];
        if (
          nextX < 0 ||
          nextY < 0 ||
          image.length <= nextX ||
          image[0] <= nextY
        ) {
          continue;
        }
        if (image[nextX][nextY] === startColor) {
          stack.push([nextX, nextY]);
        }
      }
    }
  }
  console.log(image);
};

floodFill(
  [
    [1, 1, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  0,
  0,
  3
);
