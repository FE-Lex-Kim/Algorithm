/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    let sValue = s[i];
    let iValue = indices[i];

    hash[iValue] = sValue;
  }

  return Object.entries(hash)
    .sort((a, b) => a[0] - b[0])
    .map((v) => v[1])
    .join("");
};

var restoreString = function (s, indices) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let sValue = s[i];
    let iValue = indices[i];
    arr[iValue] = sValue;
  }

  return arr.join("");
};

restoreString((s = "codeleet"), (indices = [4, 5, 6, 7, 0, 2, 1, 3]));
