/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let setArr = [...new Set(sentence)];
  return setArr.sort().length === 26;
};

checkIfPangram("thequickbrownfoxjumpsoverthelazydog");
