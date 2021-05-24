function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    const aElement = A[i];
    const bElement = B[i];

    answer += aElement * bElement;
  }

  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
