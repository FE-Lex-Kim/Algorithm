function solution(nums) {
  var answer = 0;
  let arr = [];
  // 총 더해서 나올 수 있는값
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  // 소수인지 확인하는 방법
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i] + 1; j++) {
      if (arr[i] % j === 0 && j !== arr[i]) {
        break;
      } else if (arr[i] % j === 0 && j === arr[i]) {
        answer++;
      }
    }
    // 만약 소수가 아니라면
  }
  return answer;
}
solution([1, 2, 7, 6, 4]);
