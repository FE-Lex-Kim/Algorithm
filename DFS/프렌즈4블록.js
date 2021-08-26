/* 
처음에 시간초과 판정을 받아서 내 로직자체가 너무 비효율적으로 만들었나 하고 다시 봤다.
하지만 block을 내리는 부분에서 굉장히 효율적으로 만들었다고 생각하고, 
checkFour 함수는 어쩔수 없는 코드라고 생각이 들어서 어리둥절했었다.
이전에 한번 코딩테스트 연습을 하면서 스프레드 문법을 사용하면 시간초과가 무지막지하게 늘어난게 생각이나서
이번에도 스프레드 문법을 사용했는지 확인해보니 있었다.

바로 고치니깐 엄청나게 시간이 짧아지면서 모두 통과했다.

record.push(...res) 라고 했는데 시간초과가 되었다.
절대 절대 스프레드 문법은 얕은 복사를 제외하고는 사용하면 안되겠다.
두개의 배열을 합칠때는 스프레드 문법을 사용하지말고 concat을 사용해야한다.

프로그래머스에서 11문제중 6문제나 시간초과 판정을 받았다.
 */
function solution(m, n, board) {
  for (let i = 0; i < board.length; i++) {
    const rowArr = board[i];
    board[i] = rowArr.split("");
  }

  var answer = 0;
  let direction = [
    [0, 1],
    [1, 0],
    [1, 1],
  ];

  const checkFour = (letter, row, col, record) => {
    if (col === board[0].length - 1 || row === board.length - 1) {
      return [];
    }

    for (const [checkRow, checkCol] of record) {
      if (checkRow === row && checkCol === col) {
        return [];
      }
    }

    for (const [moveRow, moveCol] of direction) {
      let nextRow = row + moveRow;
      let nextCol = col + moveCol;
      let adjLetter = board[nextRow][nextCol];
      if (adjLetter !== letter) {
        return [];
      }
    }

    record.push([row, col]);

    for (const [moveRow, moveCol] of direction) {
      let nextRow = row + moveRow;
      let nextCol = col + moveCol;
      let res = checkFour(letter, nextRow, nextCol, record);
      if (res.length) {
        // record.push(...res) 라고 했는데 시간초과가 되었다.
        // 절대 절대 스프레드 문법은 얕은 복사를 제외하고는 사용하면 안되겠다.
        // 두개의 배열을 합칠때는 스프레드 문법을 사용하지말고 concat을 사용해야한다

        record.concat(res);
      }
    }

    return record;
  };

  const checkRound = () => {
    board.forEach((letterArr, row) => {
      for (let col = 0; col < letterArr.length; col++) {
        const letter = letterArr[col];

        if (letter === "0") {
          continue;
        }

        let record = checkFour(letter, row, col, []);

        for (const [row, col] of record) {
          board[row][col] = "0";

          direction.forEach(([moveRow, moveCol]) => {
            let nextRow = row + moveRow;
            let nextCol = col + moveCol;
            board[nextRow][nextCol] = "0";
          });
        }
      }
    });
  };

  const downBlock = () => {
    let isMoveBlock = false;
    for (let col = 0; col < board[0].length; col++) {
      let record = -1;
      for (let row = board.length - 1; 0 <= row; row--) {
        let letter = board[row][col];
        // 이전에 비어있던 칸이 있었디면
        if (record !== -1 && letter !== "0") {
          board[record][col] = letter;
          board[row][col] = "0";
          record--;
          isMoveBlock = true;
          continue;
        }

        // 이전에 비어있던 칸이 없었다면
        if (record === -1 && letter === "0") {
          record = row;
          continue;
        }
      }
    }

    return isMoveBlock;
  };

  const startGame = () => {
    checkRound();
    let isMoveBlock = downBlock();

    if (isMoveBlock) {
      startGame();
    }
  };

  startGame();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "0") {
        answer++;
      }
    }
  }

  return answer;
}

/* 
TTTANT
RRFACC
RRRFCC
TRRRAA
TTMMMF
TMMTTJ
 */

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
