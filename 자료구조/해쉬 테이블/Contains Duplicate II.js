/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, n) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(num)) map.set(num, [...map.get(num), i]);
    else map.set(num, [i]);
  }

  let totalArr = [...map.values()];

  for (let i = 0; i < totalArr.length; i++) {
    let numsArr = totalArr[i];
    if (numsArr < 2) {
      continue;
    }
    for (let j = 0; j < numsArr.length; j++) {
      let curNum = numsArr[j];
      for (let k = j + 1; k < numsArr.length; k++) {
        let nextNum = numsArr[k];
        if (Math.abs(curNum - nextNum) <= n) {
          return true;
        }
      }
    }
  }

  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], (k = 2)));
