/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let arr = [];
  for (const i of s) {
    arr[i.charCodeAt() - 97] = (arr[i.charCodeAt() - 97] || 0) + 1;
  }

  for (const i of t) {
    if (!arr[i.charCodeAt() - 97]) return false;
    arr[i.charCodeAt() - 97]--;
  }

  return true;
};

console.log(isAnagram("aacc", "ccac"));
