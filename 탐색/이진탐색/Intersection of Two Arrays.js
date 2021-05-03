/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = [...new Set(nums1)].sort((a, b) => a - b);
  nums2 = [...new Set(nums2)].sort((a, b) => a - b);
  let answer = [];

  for (const target of nums2) {
    let start = 0;
    let end = nums1.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums1[mid] === target) {
        answer.push(target);
        break;
      } else if (target < nums1[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return answer;
};

intersection([4, 9, 5], [9, 4, 9, 8, 4]);
