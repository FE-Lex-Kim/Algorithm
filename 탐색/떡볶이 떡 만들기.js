// 문제유형 : 파라메트릭 서치
// 첫째 줄에 떡의 개수 N과 요청한 떡의 길이 M이 주어진다 (1<= N < 100만, 1 <= M <= 20억)
// 둘째 줄에는 떡의 개별 높이가 주어진다. 높이는 10억보다 작거나 같은 양의 정수 또는 0이다.

// 출력 조건 : 적어도 M만큼의 떡을 집에 가져가기 위해 절단기에 설정할 수 있는 높이의 최댓값을 출력한다.
const cook = (str) => {
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

  let start = 0;
  let end = Math.max(...arr);
  let result;

  while (start <= end) {
    let mid = Math.floor(start + end);
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < mid) continue;
      total += arr[i] - mid;
    }

    if (total < M) {
      end = mid - 1;
    } else {
      start = mid + 1;
      result = mid;
    }
  }

  console.log(result);
};

cook(`4 6
19 15 10 17`);
