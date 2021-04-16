/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let hash = {};
  let answer = [];

  for (let personIdx = 0; personIdx < groupSizes.length; personIdx++) {
    let size = groupSizes[personIdx];
    if (hash[size]) {
      hash[size].push(personIdx);
    } else {
      hash[size] = [personIdx];
    }

    if (hash[size].length === size) {
      answer.push(hash[size]);
      delete hash[size];
    }
  }

  return answer;
};

console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
