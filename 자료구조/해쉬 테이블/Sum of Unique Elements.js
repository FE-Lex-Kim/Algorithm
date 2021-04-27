/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      if (count === 0) {
        answer += nums[i];
      } else {
        count = 0;
      }
    } else {
      count++;
    }
  }

  return answer;
};

var sumOfUnique = function (nums) {
  let hash = {};
  let answer = 0;
  for (const i of nums) {
    if (hash[i]) hash[i]++;
    else hash[i] = 1;
  }

  let arr = Object.entries(hash);
  for (let i = 0; i < arr.length; i++) {
    let [key, value] = arr[i];
    if (value === 1) {
      answer += +key;
    }
  }

  return answer;
};
console.log(sumOfUnique([1, 2, 3, 2]));
