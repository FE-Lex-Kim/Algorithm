function solution(arr) {
  var answer = [];
  let start = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (start !== arr[i]) {
      answer.push(start);
      start = arr[i];
    }
  }
  answer.push(start);

  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]); // [1,3,0,1]
