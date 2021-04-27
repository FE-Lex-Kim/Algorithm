/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2Arr = [...new Set(nums2)];

  let answer = [];
  for (const num of set2Arr) {
    if (set1.has(num)) answer.push(num);
  }

  return answer;
};

intersection([4, 9, 5], [9, 4, 9, 8, 4]);
