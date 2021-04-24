/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let repeat = s[0];
  let j = 0;
  let count = 1;
  if (s.length === 1) {
    return false;
  }

  for (let i = 1; i < s.length; i++) {
    if (repeat[j] !== s[i]) {
      repeat += s[i];
      j = 0;
      count = 1;
    } else {
      j++;
      if (j === repeat.length) {
        count++;
        j = 0;
      }
    }
  }

  return repeat.length * count === s.length;
};

console.log(repeatedSubstringPattern("abaababaab"));
