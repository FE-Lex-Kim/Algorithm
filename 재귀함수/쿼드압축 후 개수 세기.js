function solution(arr) {
  var answer = [0, 0];
  // 1. 가장 마지막 영역의 길이가 1인경우 해당 값 반환
  // 2. 사각형 모든 값이 같은 값이면 재귀 종료후 내부값 반환
  // 3. 아닌경우 4개의 재귀를 실행하여 각각 row,col을 넣어서 실행해준다.
  //     3-1. 왼쪽위 row = row/2, col = col / 2
  //        오른쪽위 row = row - (row/2) , col = col/2
  //        왼쪽아래 row = row /2, col = col - (col / 2)
  //        오른쪽아래 row = row -(row / 2), col = col - (col / 2)
  const fc = (rowStart, rowEnd, colStart, colEnd) => {
    const startV = arr[rowStart][colStart];

    if (rowEnd - rowStart === 1) {
      startV === 0 ? answer[0]++ : answer[1]++;
      return;
    }

    for (let i = rowStart; i < rowEnd; i++) {
      for (let j = colStart; j < colEnd; j++) {
        const cur = arr[i][j];
        if (startV !== cur) {
          // 1/4 해주는 재귀를 만들어준다.
          // 왼쪽위, 오른쪽위, 왼쪽아래, 오른쪽아래
          fc(
            rowStart,
            rowStart + (rowEnd - rowStart) / 2,
            colStart,
            colStart + (colEnd - colStart) / 2
          );
          fc(
            rowStart,
            rowStart + (rowEnd - rowStart) / 2,
            colStart + (colEnd - colStart) / 2,
            colEnd
          );
          fc(
            rowStart + (rowEnd - rowStart) / 2,
            rowEnd,
            colStart,
            colStart + (colEnd - colStart) / 2
          );
          fc(
            rowStart + (rowEnd - rowStart) / 2,
            rowEnd,
            colStart + (colEnd - colStart) / 2,
            colEnd
          );
          return;
        }
      }
    }

    // 모든 값이 같은 값인 경우

    startV === 0 ? answer[0]++ : answer[1]++;
    return;
  };
  fc(0, arr.length, 0, arr[0].length);
  // console.log(answer);
  return answer;
}

solution([
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]);
