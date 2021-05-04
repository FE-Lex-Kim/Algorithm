/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  if (letters[0] < target || letters[letters.length - 1] <= target) {
    return letters[0];
  }

  let left = 0;
  let right = letters.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[left];
};

console.log(nextGreatestLetter(["c", "f", "j"], "c"));
