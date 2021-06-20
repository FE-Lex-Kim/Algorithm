function solution(n) {
  var answer = 0;
  let matrix = [];

  function checkConflict(row) {
    for (let i = 0; i < row; i++) {
      // 이전말과 같은 열인지 확인한다.
      // 절대 행이 같을순 없다.
      // 행은 항상 x이기 때문이다.
      // 행은 1씩늘어나기 떄문에 확인안해도된다.
      if (matrix[i] === matrix[row]) {
        return true;
      }

      // 대각선 체크
      // 대각선인지 확인하려면 항상 가로와 세로의 삼각형 길이가 같다.
      // 따라서 행 - 행 값과 열 - 열 값이 같으면 대각선이 겹친다는 의미이다.
      if (Math.abs(matrix[i] - matrix[row]) === row - i) {
        return true;
      }
    }

    return false;
  }

  function findNQueen(row) {
    if (row === n) {
      answer++;
      return;
    }

    for (let col = 0; col < n; col++) {
      matrix[row] = col;
      if (!checkConflict(row)) {
        findNQueen(row + 1);
      }
    }
  }

  findNQueen(0);

  return answer;
}

solution(10);
