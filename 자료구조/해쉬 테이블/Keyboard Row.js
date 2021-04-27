/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let arr1 = "qwertyuiopQWERTYUIOP".split("");
  let arr2 = "asdfghjklASDFGHJKL".split("");
  let arr3 = "zxcvbnmZXCVBNM".split("");
  let totallArr = [arr1, arr2, arr3];

  let map = new Map();

  for (let i = 0; i < totallArr.length; i++) {
    for (let j = 0; j < totallArr[i].length; j++) {
      map.set(totallArr[i][j], i);
    }
  }

  let answer = [];

  for (const word of words) {
    let set = new Set();
    for (const letter of word) {
      set.add(map.get(letter));
      if (set.size !== 1) {
        break;
      }
    }

    if (set.size === 1) {
      answer.push(word);
    }
  }

  return answer;
};

findWords(["Hello", "Alaska", "Dad", "Peace"]);
