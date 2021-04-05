// 문제 유형: 파라메트릭 서치
// 첫째 줄에 N과 x가 정수 형태로 공백으로 구분되어 입력된다.
// (1 <=N <= 1000000), (-10의 9승 <= x <= 10의 9승)

// 둘째 줄에 N개의 원소가 정수 형태로 공백으로 구분되어 입력된다.

// 수열의 원소중에서 값이 x인 원소의 개수를 출력한다.
// 단 값이 x인 원소가 하나도 없으면 -1을 출력한다.

const getSpecificNum = (str) => {
  let testArr = [];
  for (let line of str.split("\n")) {
    testArr = [...testArr, line.split(" ")];
  }

  // 첫번째 줄에서 첫번째, 두번째 요소 N, M에 할당
  let N = +testArr[0][0];
  let x = +testArr[0][1];

  // 첫번째줄 배열에서 삭제
  testArr.splice(0, 1);

  // 문자열을 숫자로 바꾼다.
  let arr = testArr[0].map((todo) => +todo);

  // 배열에서 목표값의 가장 작은값 구하기
  const getMinByParametric = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    let min;
    // 최소값 구하는 while 문
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (x <= arr[mid]) {
        // 만약 mid가 x보다 크거나 같다면
        end = mid - 1;
        min = mid;
      } else {
        // 만약 mid가 x보다 작다면
        start = mid + 1;
      }
    }

    // 만약 -1이면 값이 없다는 의미이다.
    return min;
  };

  const getMaxByParametric = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    let max;

    // 만약 배열의 마지막 요소 값이 목표값과 같다면 최댓값 구하는 while문 실행하지 않는다.
    // 마지막 배열의 요소를 최댓값으로 넣어준다.
    if (arr[arr.length - 1] === x) {
      max = arr.length - 1;
      console.log(max);
      return;
    }

    // 배열의 마지막 요소가 목표값이 아닌경우 while문 돈다.
    // 최댓값 구하는 while 문
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] <= x) {
        // 만약 mid가 x보다 크거나 같다면
        start = mid + 1;
        max = mid;
      } else {
        // 만약 mid가 x보다 작다면
        end = mid - 1;
      }
    }

    // 만약 -1이면 값이 없다는 의미이다.
    return max;
  };
  let min = getMinByParametric(arr, 2);
  let max = getMaxByParametric(arr, 2);
  console.log("min", min);
  console.log("max", max);

  let answer = max - min + 1;

  // 만약 answer이 NaN이면 목표값이 배열에 없다는 의미이다.
  // 만약 배열에 목표값이 없으면 최소값 함수를 실행하면 없을때 0 또는 undefiend가 나온다
  // 만약 배열에 목표값이 없으면 최댓값 함수를 실행하면 없을때 0 또는 undefiend가 나온다.
  if (isNaN(answer)) {
    return 0;
  }

  return answer;
};

console.log(
  getSpecificNum(`7 2
1 1 1 1 2 2 2 3 3 4`)
);
