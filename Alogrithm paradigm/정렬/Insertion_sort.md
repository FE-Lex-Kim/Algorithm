# 삽입 정렬

시작 인덱스를 항상 1로 둔다.

이전 요소와 비교해 만약 현재 요소가 더 작으면 이전요소와 바꾸어준다.

<br>

계속 바꾸어주다가 이전요소가 더 크거나 인덱스가 0인경우는 시작 인덱스를 다음으로 옮겨준다.

<br>

이러한 정렬방식을 삽입 정렬이라고한다.

<br>

거의 정렬이된 리스트를 정렬한다면 삽입 정렬이 가장 빠르다.

하지만 정반대로 정렬된 리스트인 경우 매우 오래걸린다.

```jsx
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      let cur = arr[j];
      if (arr[j] < arr[j - 1]) {
        arr[j] = arr[j - 1];
        arr[j - 1] = cur;
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSort([3, 5, 1, 4, 7, 6, 2]));
```

<br>

## **Big O**

- **Worst Case: O(n^2)**: 정렬이 하나도 안되어있는 경우
- **Best Case: O(n)**: 이미 정렬이 되어있는 경우

삽입 정렬 역시 버블 정렬과 똑같은 시간 복잡도를 가진다.

<br>

참고

- [[Code Playground]](https://im-developer.tistory.com/133)
