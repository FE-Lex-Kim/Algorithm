/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  let arr = [...A.split(" "), ...B.split(" ")];
  let map = new Map();
  let answer = [];

  for (const word of arr) {
    if (map.has(word)) map.set(word, map.get(word) + 1);
    else map.set(word, 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) answer.push(key);
  }

  return answer;
};

var uncommonFromSentences = function (A, B) {
  let arr = [...A.split(" "), ...B.split(" ")];
  let answer = [];

  for (const word of arr) {
    if (arr.indexOf(word) === arr.lastIndexOf(word)) {
      answer.push(word);
    }
  }

  return answer;
};

console.log(uncommonFromSentences("apple apple", "banana"));
