/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  let j = s.length - 1;
  for (let i = 0; i < s.length / 2; i++, j--) {
    if (vowels.includes(s[i])) {
      count++;
    }
    if (vowels.includes(s[j])) {
      count--;
    }
  }

  return count === 0;
};

console.log(halvesAreAlike("AbCdEfGh"));
