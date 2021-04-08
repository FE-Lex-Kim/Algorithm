// 줄 별로 line으로 값이 출력된다.
// 1
// 2 3 4 5
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  // line에 입력값이 문자열로 한 줄씩 들어간다.
  console.log(line);

  rl.close();
}).on("close", function () {
  process.exit();
});

// --------------------------------------------------------

// 입력값
// 4 6
// 19 15 10 17

// 여러줄 입력하는 코드
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testArr = [];

rl.on("line", function (line) {
  // line에 입력값이 문자열로 한 줄씩 들어간다.
  // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
  let numberLine = line.split(" ").map((v) => +v);
  testArr = [...testArr, numberLine];
}).on("close", function () {
  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];
  let M = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 두 번째줄 하나만 있는경우 사용
  let arr = testArr[0];

  // 만약 두 번째줄 이상 줄이 존재하면 사용
  // let arr = testArr;

  console.log(arr);

  // 입력값
  // 4 6
  // 19 15 10 17
  process.exit();
});
