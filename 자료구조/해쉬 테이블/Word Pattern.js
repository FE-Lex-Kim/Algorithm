/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let letterMap = new Map();
  let wordMap = new Map();
  s = s.split(" ");

  if (s.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    let letter = pattern[i];
    let word = s[i];

    if (!letterMap.has(letter) && !wordMap.has(word)) {
      letterMap.set(letter, word);
      wordMap.set(word, letter);
    } else {
      if (letterMap.get(letter) !== word && wordMap.get(word) !== letter) {
        return false;
      }
    }
  }

  return true;
};
console.log(wordPattern("aaaa", "dog cat cat dog"));
