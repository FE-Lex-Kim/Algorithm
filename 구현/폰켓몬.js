function solution(nums) {
  var answer = 0;
  let set = new Set(nums);
  answer = set.size;
  if (nums.length / 2 < answer) {
    answer = nums.length / 2;
    return nums.length / 2;
  }

  return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
