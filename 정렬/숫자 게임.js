function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  var answer = 0;
  /* 
    B는 A보다 최소한의 차이로 이겨야 최대한 승점을 얻는다.
    따라서 A와 B를 오름차순으로 정렬한다.
    그 이후 만약 A[0] 값과 B[0] 값이 똑같거나 B가 더 작다면 
    B[1]과 A[0] 값을 비교한다.(B 인덱스 +1)

    만약 B[1]이 더크다면 A와 B 인덱스 +1
   */
  let BIdx = 0;
  let AIdx = 0;
  while (BIdx < B.length) {
    let BValue = B[BIdx];
    let AValue = A[AIdx];

    if (BValue <= AValue) {
      BIdx++;
    } else {
      BIdx++;
      AIdx++;
      answer++;
    }
  }

  return answer;
}

solution([1, 1, 5, 5], [1, 2, 3, 4]);
