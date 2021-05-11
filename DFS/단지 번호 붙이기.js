// 만약 첫 째줄을 거르고 그 다음 줄부터 값을 사용하고 싶은 코드
// 첫 째줄의 첫번째 요소와, 두번째 요소를 N과 M값으로 할당
// 두 번째줄을 배열에 넣음
// arr에 두번째줄부터 배열이 할당
const test2 = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 만약 두 번째줄 이상 줄이 존재하면 사용
  let arr = testArr.map((v) => v[0].split(""));
  let count = 0;
  let answer = [];
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || N <= i || N <= j) {
      return;
    }
    if (arr[i][j] === "1") {
      arr[i][j] = "2";
      count++;
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      dfs(i, j);
      if (count !== 0) {
        answer.push(count);
        count = 0;
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer.unshift(answer.length);

  console.log(answer);
};

test2(`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`);
