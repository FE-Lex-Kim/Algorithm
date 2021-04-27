/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]].push(i);
    } else {
      hash[nums[i]] = [i];
    }
  }

  let values = Object.values(hash);
  let answer = 0;

  for (let i = 0; i < values.length; i++) {
    let sum = 0;
    for (let j = values[i].length - 1; 0 < j; j--) {
      sum += j;
    }
    answer += sum;
  }

  return answer;
};

console.log(numIdenticalPairs([1, 2, 3]));
