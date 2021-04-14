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

  let arr = testArr;

  /* 
  1. arr[i][1] 값을 기준으로 정렬시켜준다.
  2. arr 만큼 반복문을 돈다 i
  3. 시작 시작은 arr[0]이 가장 첫 수업 시작이다.
  4. 이후 arr[0][1] 값보다 arr[i][0] 이 작은 경우를 제외 시키고 큰 경우를 골라준다.
  5. 골라준후 count++ 해준다
  6. 이후 arr[i][1] 값을 끝나는 시간으로 다시 잡는다. let end = 0;
  7. 만약 end 값 arr[0][0] 값이 큰 경우를 반복해준다.
  */

  arr.sort((a, b) => a[1] - b[1]);
  let end = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (end <= arr[i][0]) {
      count++;
      end = arr[i][1];
    }
  }
  console.log(count);
};

test2(`11
1 4
3 5
5 7
3 8
5 9
6 10
0 6
8 11
8 12
2 13
12 14`); // 4
