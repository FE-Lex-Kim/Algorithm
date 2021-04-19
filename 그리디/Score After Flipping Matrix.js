/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (arr) {
  // 1. row flipping 코드
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 0) {
      arr[i] = arr[i].map((v) => (v === 0 ? 1 : 0));
    }
  }

  // 2. colum flipping 코드
  for (let j = 0; j < arr[0].length; j++) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][j] === 1) {
        count--;
      } else {
        count++;
      }
    }
    if (0 < count) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][j] === 0) {
          arr[i][j] = 1;
        } else {
          arr[i][j] = 0;
        }
      }
    }
  }

  // 이진수 -> 십진수 변환
  let answerArr = arr.map((v) => parseInt(v.join(""), 2));
  let answer = answerArr.reduce((acc, cur) => acc + cur, 0);

  return answer;
};

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
