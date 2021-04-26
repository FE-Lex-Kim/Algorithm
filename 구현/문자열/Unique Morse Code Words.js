/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let arr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let answerArr = [];
  for (const i of words) {
    let str = "";
    for (const j of i) {
      str += arr[j.charCodeAt() - 97];
    }
    answerArr.push(str);
  }

  return new Set(answerArr).size;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
