const test2 = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    // 문자열로 바뀌어있는 배열의 요소들을 숫자요소로 바꾸어준다
    let numberLine = line.split(" ").map((v) => +v);
    testArr = [...testArr, numberLine];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let M = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 만약 두 번째줄 이상 줄이 존재하면 사용
  let arr = testArr;

  /* 
  1. arr을 내림 차순으로 정렬한다.
  2. arr을 반복문 돈다 i
  3. arr[i]가 현재 M원을 나누고 정수만 가진다. let coinNum = Math.floor(M / arr[i])
  4. M - coinNum * arr[i] 을 해준다.
  5. 할때마다 count++ 해준다
   */
  let answer = 0;

  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    let coinNum = Math.floor(M / arr[i]);
    if (coinNum !== 0) {
      M = M - coinNum * arr[i];
      answer += coinNum;
    }
    if (M === 0) {
      break;
    }
  }
  console.log(answer);
};

test2(`10 4200
1
5
10
50
100
500
1000
5000
10000
50000`); // 6
