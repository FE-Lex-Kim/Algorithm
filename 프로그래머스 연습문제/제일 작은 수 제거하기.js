function solution(arr) {
  var answer = [];
  let min = arr[0];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  arr.splice(idx, 1);
  if (arr.length === 0) {
    return [-1];
  }

  return arr;
}

solution([4]);
