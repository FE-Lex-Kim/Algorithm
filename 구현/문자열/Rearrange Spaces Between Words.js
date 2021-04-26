/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaceLength = text.split("").filter((v) => v === " ").length;
  let word = text.match(/[\w]+/g);
  if (word.length === 1) {
    return word[0] + " ".repeat(spaceLength);
  }

  let spreadSpace = Math.floor(spaceLength / (word.length - 1));
  let leftSpace = spaceLength % (word.length - 1);
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) {
      answer += word[i];
      break;
    }
    answer += word[i] + " ".repeat(spreadSpace);
  }

  answer += " ".repeat(leftSpace);

  return answer;
};

var reorderSpaces = function (text) {
  console.log(text.split(" "));
};

console.log(reorderSpaces("  this   is  a sentence "));
