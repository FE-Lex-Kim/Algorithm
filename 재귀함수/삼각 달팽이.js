function solution(n) {
  var answer = Array.from({ length: n }, (_, i) =>
    Array.from({ length: i + 1 }, () => 0)
  );

  // 1. 배열안의 요소의 개수는 n개
  // 2. 요소의 첫번째 ~n 까지 각각 자신의 인덱스 +1 개만큼 length가 된다.
  // 3. 각 요소 배열의 첫번째 인덱스 요소 값은 stating point ~ n 까지
  // 4. 마지막 배열의 요소 배열의 값은 n ~ n + (n-1) 까지이다.
  // 5. 다시 각각 배열의 요소 배열의 마지막 값은 배열의 마지막 요소값에서 1씩 작아진다.

  // 필요한것, 시작요소 인덱스
  // 시작 값
  // 총 내려가는 값, -3

  const recursive = (startingPoint, startValue, n) => {
    // 종료 포인트
    // startingPoint 값이 0이 아닌경우
    // 또는 n이 0보다 작을 경우

    let [row, cul] = startingPoint;
    if (n < 0) {
      return;
    }

    // 3. 각 요소 배열의 첫번째 인덱스 요소 값은 stating point ~ n 까지
    for (let i = 0; i < n; i++) {
      // cul 값이 변경되는것이 point
      // 앞자리는 statValue 에서 +1 해준다.
      answer[i + row][cul] = startValue + i;
    }

    let last;

    // 4. 마지막 배열의 요소 배열의 값은 n ~ n + (n-1) 까지이다.
    for (let i = 1; i < n; i++) {
      // row + n -1값이 마지막 배열이다.
      // 넣어주어야하는 값은 마지막 배열의 첫번째 요소에서 1씩 증가하면된다.
      answer[row + n - 1][cul + i] = answer[row + n - 1][cul] + i;
      last = answer[row + n - 1][cul] + i;
    }

    // 5. 다시 각각 배열의 요소 배열의 마지막 값은 배열의 마지막 요소값에서 1씩 작아진다.
    // i = 마지막 배열 row, 어디까지? 첫번째 요소 전까지 즉, 두번째요소까지만 변경시켜야함
    for (let i = row + n - 2; row < i; i--) {
      last++;
      answer[i][answer[i].length - cul - 1] = last;
    }

    recursive([row + 2, cul + 1], last + 1, n - 3);
  };

  recursive([0, 0], 1, n);

  return answer.flat();
}

console.log(solution(8));
