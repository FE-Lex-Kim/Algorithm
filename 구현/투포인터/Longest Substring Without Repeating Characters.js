/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max = 0;
  let seen = new Map();

  for (let right = 0; right < s.length; right++) {
    const rightElement = s[right];

    let lastElementIndex = seen.get(rightElement);
    if (lastElementIndex !== undefined) {
      if (left <= lastElementIndex) {
        left = lastElementIndex + 1;
      }
    }

    max = Math.max(right - left + 1, max);
    seen.set(rightElement, right);
  }

  return max;
};

lengthOfLongestSubstring("abcabcbb");
