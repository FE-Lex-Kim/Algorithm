/* 
1. 해당 요소의 기준으로 좌,우측에 현재 요소값보다 작은 값이 있는지 확인한다.
2. 좌측 또는 우측에 자신의 요소보다 작은값이 없는 경우는 최후에 남는 요소가 될 수 있다.
3. 하지만 a의 길이가 1,000,000이다 보니 현재 요소의 기준으로 좌측, 우측을 확인하게 되면 N * N 의 시간 복잡도로 1조가 된다.
4. 따라서 효율적인 로직을 구성해야한다.
5. 반복문을 돌면서 현재요소의 좌측과 우측의 최솟값을 매번 요소마다 확인해서 갱신한다.
6. 만약 현재요소가 좌측의 최솟값 변수보다 작다면, 좌측에는 현재요소보다 작은요소가 없다는 것을 의미하므로 최후에 남는 요소가 된다.
7. 마찬가지로 우측도 우측의 최솟값 변수보다 작다면, 우측에는 현재요소보다 작은 요소가 없다는 것을 의미하므로 최후에 남는 요소가 된다.
8. 이때 좌,우측 최솟값 변수보다 현재요소가 공통적으로 작을 수 있으므로 Set객체를 통해 공통된 요소는 제외시켜준다.
9. 반복문을 두번 도는것보다 투포인터를 사용해서 시간복잡도를 줄일 수 있다.
*/

function solution(a) {
  let answerArr = new Set([a[0], a[a.length - 1]]);

  let leftMin = a[0];
  let rightMin = a[a.length - 1];
  for (let i = 1; i < a.length - 1; i++) {
    let leftEle = a[i];
    let rightEle = a[a.length - 1 - i];

    if (leftEle < leftMin) {
      leftMin = leftEle;
      answerArr.add(leftEle);
    }

    if (rightEle < rightMin) {
      rightMin = rightEle;
      answerArr.add(rightEle);
    }
  }

  return answerArr.size;
}

solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]);
