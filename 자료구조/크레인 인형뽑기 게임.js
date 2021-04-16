function solution(board, moves) {
  var answer = 0;
  moves = moves.map((v) => --v);
  let stack = [];

  // 인형 뽑기
  // 인형 뽑기 움직임
  for (let move = 0; move < moves.length; move++) {
    // 그 줄에 인형이 있는지(0이 아닌지) 확인
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[move]] !== 0) {
        if (board[i][moves[move]] === stack[stack.length - 1]) {
          answer += 2;
          board[i][moves[move]] = 0;
          stack.splice(stack.length - 1, 1);
          break;
        }
        stack.push(board[i][moves[move]]);
        board[i][moves[move]] = 0;
        break;
      }
    }
  }

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
