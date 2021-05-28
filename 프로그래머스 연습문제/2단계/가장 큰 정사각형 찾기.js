function solution(board) {
  let max = 0;
  if (board[0].length <= 1 || board.length <= 1) {
    return 1;
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (1 <= board[i][j]) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const upLeft = board[i - 1][j - 1];
        let min = Math.min(up, left, upLeft) + 1;
        board[i][j] = min;
        max = Math.max(max, min);
      }
    }
  }

  return max ** 2;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
