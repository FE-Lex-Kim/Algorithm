/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let x = click[0];
  let y = click[1];
  if (board[x] === undefined || board[x][y] === undefined) {
    return;
  }
  let cur = board[x][y];
  let countMine = 0;
  // 상,하,좌,우,상왼,상오,하왼,하오
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, +1],
    [1, -1],
    [1, 1],
  ];

  if (cur === "M") {
    board[x][y] = "X";
    return board;
  }

  if (cur === "E") {
    // 상,하,좌,우,상왼,상오,하왼,하오
    for (let i = 0; i < direction.length; i++) {
      let nextX = direction[i][0] + x;
      let nextY = direction[i][1] + y;
      if (board[nextX] === undefined || board[nextX][nextY] === undefined) {
        continue;
      }

      let cur = board[nextX][nextY];
      if (cur === "M") {
        countMine++;
      }
    }

    if (countMine === 0) {
      board[x][y] = "B";
      for (let i = 0; i < direction.length; i++) {
        let nextX = direction[i][0] + x;
        let nextY = direction[i][1] + y;
        updateBoard(board, [nextX, nextY]);
      }
    } else {
      board[x][y] = `${countMine}`;
    }

    return board;
  }
};

console.log(
  updateBoard(
    [
      ["E", "E", "E", "E", "E"],
      ["E", "E", "M", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
    ],
    [3, 0]
  )
);
