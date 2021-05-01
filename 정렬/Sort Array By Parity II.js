/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let answer = [];
  let even = 0;
  let odd = 1;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur % 2) {
      answer[odd] = cur;
      odd += 2;
    } else {
      answer[even] = cur;
      even += 2;
    }
  }

  return answer;
};

sortArrayByParityII([4, 2, 5, 7]);
