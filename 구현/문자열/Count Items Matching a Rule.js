/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let idx = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  let answer = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][idx] === ruleValue) {
      answer++;
    }
  }
  return answer;
};

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver"
);
