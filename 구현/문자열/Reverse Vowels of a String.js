/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = [];
  let sArr = s.split("");
  let j = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (
      sArr[i] === "a" ||
      sArr[i] === "e" ||
      sArr[i] === "i" ||
      sArr[i] === "o" ||
      sArr[i] === "u" ||
      sArr[i] === "A" ||
      sArr[i] === "E" ||
      sArr[i] === "O" ||
      sArr[i] === "I" ||
      sArr[i] === "U"
    ) {
      arr.push(sArr[i]);
    }
  }

  arr.reverse();

  for (let i = 0; i < sArr.length; i++) {
    if (
      sArr[i] === "a" ||
      sArr[i] === "e" ||
      sArr[i] === "i" ||
      sArr[i] === "o" ||
      sArr[i] === "u" ||
      sArr[i] === "A" ||
      sArr[i] === "E" ||
      sArr[i] === "O" ||
      sArr[i] === "I" ||
      sArr[i] === "U"
    ) {
      sArr.splice(i, 1, arr[j]);
      j++;
    }
  }

  return sArr.join("");
};

var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  while (left < right) {
    if (vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }

    if (vowels.indexOf(arr[left]) === -1) {
      left++;
    }

    if (vowels.indexOf(arr[right]) === -1) {
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseVowels("hello"));
