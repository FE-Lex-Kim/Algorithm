/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  //balloon
  let arr = [0, 0, 0, 0, 0]; // b a l o n
  // 11221
  let answer = 0;

  for (const letter of text) {
    if (letter === "b") {
      arr[0]++;
    } else if (letter === "a") {
      arr[1]++;
    } else if (letter === "l") {
      arr[2]++;
    } else if (letter === "o") {
      arr[3]++;
    } else if (letter === "n") {
      arr[4]++;
    }

    if (
      arr[0] >= 1 &&
      arr[1] >= 1 &&
      arr[2] >= 2 &&
      arr[3] >= 2 &&
      arr[4] >= 1
    ) {
      answer++;
      arr = arr.map((v, i) => {
        if (i === 2 || i === 3) {
          return v - 2;
        }
        return v--;
      });
    }
  }

  return answer;
};

var maxNumberOfBalloons = function (text) {
  let map = new Map();
  for (const i of text) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  let countb = Math.floor(map.get("b"));
  let counta = Math.floor(map.get("a"));
  let countl = Math.floor(map.get("l") / 2);
  let counto = Math.floor(map.get("o") / 2);
  let countn = Math.floor(map.get("n"));

  let min = Math.min(counta, countb, countl, counto, countn);
  return min ? min : 0;
};
console.log(maxNumberOfBalloons("leetcode"));
