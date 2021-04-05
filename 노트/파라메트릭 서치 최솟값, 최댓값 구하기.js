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
  console.log(min);
};

const arr = [1, 1, 1, 2, 2, 2, 3];
getMinByParametric(arr, 2);

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
  console.log(max);
};

getMaxByParametric(arr, 2);
