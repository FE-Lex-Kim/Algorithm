/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let count = 0;
  let str = word;
  while (true) {
    if (sequence.includes(str) === false) {
      return count;
    }

    count++;
    str += word;
  }
};

maxRepeating("ababc", "ab");
