const test2 = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => +v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  let arr = testArr.flat();
  let answerArr = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    answerArr.push(arr[i] * N);
    N--;
  }

  console.log(Math.max(...answerArr));
};

test2(`2
10
15`); // 20
