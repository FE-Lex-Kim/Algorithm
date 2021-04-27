/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let hash = {};
  for (const i of nums) {
    if (hash[i]) hash[i]++;
    else hash[i] = 1;
  }

  let arr = Object.entries(hash);
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (+arr[j][0] < nums[i]) {
        sum += arr[j][1];
      }
    }
    nums[i] = sum;
  }

  return nums;
};

var smallerNumbersThanCurrent = (nums) => {
  let map = new Map(
    [...nums].sort((a, b) => b - a).map((v, i) => [v, nums.length - 1 - i])
  );

  return nums.map((v) => map.get(v));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
