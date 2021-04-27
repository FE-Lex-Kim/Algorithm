/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let hash = {};
  let answer = 0;
  for (const i of chars) {
    if (hash[i]) hash[i]++;
    else hash[i] = 1;
  }
  label1: for (const word of words) {
    let key = Object.keys(hash);
    let values = Object.values(hash);
    for (const letter of word) {
      let idx = key.indexOf(letter);
      if (idx !== -1 && values[idx] !== 0) {
        values[idx]--;
      } else {
        continue label1;
      }
    }
    answer += word.length;
  }

  return answer;
};

countCharacters(["hello", "world", "leetcode"], "welldonehoneyr");
