/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let hash = {};
  let answer = 0;
  for (const i of stones) {
    if (hash[i]) hash[i]++;
    else hash[i] = 1;
  }

  for (const j of jewels) {
    if (hash[j]) answer += hash[j];
  }

  return answer;
};

var numJewelsInStones = function (jewels, stones) {
  let set = new Set();

  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }

  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }

  return count;
};

numJewelsInStones("aA", "aAAbbbb");
