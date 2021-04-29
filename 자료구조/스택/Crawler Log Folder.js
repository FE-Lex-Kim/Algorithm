/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let answer = 0;
  for (const log of logs) {
    if (log === "../") {
      if (answer !== 0) {
        answer--;
      }
    } else if (log === "./") {
    } else {
      answer++;
    }
  }

  return answer;
};
console.log(minOperations(["d1/", "../", "../", "../"]));
