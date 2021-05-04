# Binary Search

<br>

이진 탐색 알고리즘은 선형 탐색 알고리즘과 달리, 정렬된 리스트를 전제를로 한다.

정렬된 리스트가 아니면 이 알고리즘은 적용이 불가능하다.

<br>

코딩테스트에서 큰 탐색 범위를 보면 가장 먼저 이진 탐색을 떠올려야한다.

<br>

이진탐색은 1회 비교를 거칠때마다 탐색범위가 절반으로 줄어든다.

```jsx
const binary_search = (select, arr) => {
  let mid = Math.floor(arr.length / 2);
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    mid = Math.floor((first + last) / 2);
    if (arr[mid] === select) {
      return mid;
    } else if (arr[mid] > select) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return null;
};

console.log(binary_search(2, [2, 3, 5, 7, 11]));
console.log(binary_search(0, [2, 3, 5, 7, 11]));
console.log(binary_search(5, [2, 3, 5, 7, 11]));
console.log(binary_search(3, [2, 3, 5, 7, 11]));
console.log(binary_search(11, [2, 3, 5, 7, 11]));
```
