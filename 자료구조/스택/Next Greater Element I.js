/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let answer = [];
  label1: for (let i = 0; i < nums1.length; i++) {
    let num1 = nums1[i];
    let idx = nums2.indexOf(num1);

    if (idx === -1) {
      answer.push(-1);
      continue;
    }

    for (let j = idx + 1; j < nums2.length; j++) {
      if (num1 < nums2[j]) {
        answer.push(nums2[j]);
        continue label1;
      }
    }

    answer.push(-1);
  }

  return answer;
};

nextGreaterElement((nums1 = [2, 4]), (nums2 = [1, 2, 3, 4]));
