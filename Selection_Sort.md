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

<br>

## **Big O**

- **Worst Case: O(n^2)**: 정렬이 하나도 안되어있는 경우
- **Best Case: O(n^2)**: 이미 정렬이 되어있는 경우

<br>

선택 정렬은 위의 두 정렬과는 다르게 정렬이 이미 되어있는 경우에도 O(n^2)의 시간 복잡도를 가진다.

그 이유는 매번 정해진 자리에 올 수 있는 최소값을 찾아야하기 때문이다. 그렇기 때문에 성능이 매우 떨어진다.

<br>

참고

- [[Code Playground]](https://im-developer.tistory.com/133)
