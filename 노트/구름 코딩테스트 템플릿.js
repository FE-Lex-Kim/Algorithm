// 줄 별로 line으로 값이 출력된다.
// 1
// 2 3 4 5
const test = (str) => {
  for (let line of str.split("\n")) {
    console.log(line);
  }
};

test(`1
2 3 4 5`);

// 만약 첫 째줄을 거르고 그 다음 줄부터 값을 사용하고 싶은 코드
// 첫 째줄의 첫번째 요소와, 두번째 요소를 N과 M값으로 할당
// 두 번째줄을 배열에 넣음
// arr에 두번째줄부터 배열이 할당
const cook = (str) => {
  let arr = [];
  for (let line of str.split("\n")) {
    arr = [...arr, line.split(" ")];
  }
  let N = arr[0][0];
  let M = arr[0][1];

  arr.splice(0, 1);
  console.log(arr);
};

cook(`4 6
19 15 10 17`);
