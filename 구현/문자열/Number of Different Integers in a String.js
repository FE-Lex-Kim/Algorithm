/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let numArr = word.match(/[\d]+/g);

  if (numArr === null) {
    return 0;
  }
  let numArrtoInt = numArr.map((v) => BigInt(v));

  numArr = [...new Set(numArrtoInt)];

  return numArr.length;
};

console.log(numDifferentIntegers("a1b01c001"));
