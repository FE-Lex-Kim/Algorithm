// 줄 별로 line으로 값이 출력된다.
// 1
// 2 3 4 5
const test1 = (str) => {
  for (let line of str.split("\n")) {
    console.log(line);
  }
};

test1(`1
2 3 4 5`);

// 만약 첫 째줄을 거르고 그 다음 줄부터 값을 사용하고 싶은 코드
// 첫 째줄의 첫번째 요소와, 두번째 요소를 N과 M값으로 할당
// 두 번째줄을 배열에 넣음
// arr에 두번째줄부터 배열이 할당
const test2 = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    testArr = [...testArr, line.split(" ")];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];
  let M = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 문자열을 숫자로 바꾼다.
  let arr = testArr[0].map((todo) => +todo);

  console.log(arr);
};

test2(`4 6
19 15 10 17`);
