/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = "";
  s = s.toLocaleLowerCase();

  for (const i of s) {
    if (
      (97 <= i.charCodeAt() && i.charCodeAt() <= 122) ||
      (48 <= i.charCodeAt() && i.charCodeAt() <= 57)
    ) {
      str += i;
    }
  }
  let mid = Math.floor(str.length / 2);
  let left = str.slice(0, mid);
  let right;

  // 짝수라면
  if (str.length % 2 === 0) {
    right = str.slice(mid);
  } else {
    right = str.slice(mid + 1);
  }

  let j = left.length - 1;
  let i = 0;

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[j]) {
      return false;
    }
    j--;
  }

  //   while (-1 < j) {
  //     if (left[i] !== right[j]) {
  //       return false;
  //     }
  //     i++;
  //     j--;
  //   }

  return true;
};

console.log(isPalindrome("race a car"));
