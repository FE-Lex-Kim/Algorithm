## Selection Sort

첫번째 요소부터 차례대로 탐색후 최솟값을 구한다.

구한 최솟값을 시작 요소와 바꾸어서 정렬한다.

<br>

그 두번째 요소를 시작요소로 하고 선형탐색으로 최솟값을 구한다.

구한 최솟값을 시작요소와 교체하여 정렬한다.

<br>

이러한 정렬 방식을 선택 정렬이라 한다.

리스트의 정렬의 상황에 영향을 받지 않고 일정한 시간이 소요된다.

```jsx
const selection_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let cur = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    arr[i] = arr[minIndex];
    arr[minIndex] = cur;
  }
  return arr;
};

console.log(selection_sort([6, 2, 5, 1, 3, 7, 4]));
```
