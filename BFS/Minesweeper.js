/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let needVisit = [click];
  while (needVisit.length !== 0) {
    let [x, y] = needVisit.shift();
    if (board[x] === undefined || board[x][y] === undefined) {
      continue;
    }
    let cur = board[x][y];
    if (cur === "M") {
      board[x][y] = "X";
    }
    // 상하좌우, 상왼, 상오, 하왼, 하오
    let direction = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
    let countMine = 0;
    if (cur === "E") {
      for (let i = 0; i < direction.length; i++) {
        let nx = direction[i][0] + x;
        let ny = direction[i][1] + y;
        if (board[nx] === undefined || board[nx][ny] === undefined) {
          continue;
        }

        if (board[nx][ny] === "M") {
          countMine++;
        }
      }
    }

    // 주변에 mine이 있는경우
    // 해당값을 변경해주고 넘어간다
    if (0 < countMine) {
      board[x][y] = `${countMine}`;
      continue;
    }

    // 주변에 mine이 없는경우 countMine이 0이다. 그리고 현재값은 'E' 이다

    if (countMine === 0 && cur === "E") {
      board[x][y] = "B";
      for (let i = 0; i < direction.length; i++) {
        let nx = direction[i][0] + x;
        let ny = direction[i][1] + y;
        needVisit.push([nx, ny]);
      }

      continue;
    }

    // 현재값이 숫자일때도 countMine이 0이다, 숫자일경우 그냥 넘어가야한다.
  }

  return board;
};

updateBoard(
  [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"],
  ],
  [3, 0]
);
