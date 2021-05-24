function solution(arr1, arr2) {
  var answer = [[]];
  // arr1[0][1]같이 각각의 arr1의 요소를 선택하는 방법.
  for (let i = 0; i < arr1.length; i++) {
    // arr1의 첫번째줄
    for (let j = 0; j < arr2[0].length; j++) {
      // arr2의 세로줄 길이 별로 arr1의 첫번째줄이 반복된다.
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        // arr1의 첫번째줄의 요소를 각각 선택하기 위해 사용

        // arr1의 첫번째줄이 arr2의 세로줄이 끝날때까지 반복됨
        let arr1Element = arr1[i][k];
        let arr2Elemnet = arr2[k][j];
        sum += arr1Element * arr2Elemnet;
      }
      if (!answer[i]) {
        answer[i] = [];
      }
      if (!answer[i][j]) {
        answer[i][j] = [];
      }
      answer[i][j] = sum;
    }
  }
  return answer;
}
