/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr1) {
  let hash = {};
  for (const i of arr1) {
    if (hash[i]) hash[i]++;
    else hash[i] = 1;
  }

  let arr = Object.values(hash).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return true;
};

var uniqueOccurrences = function (arr) {
  let myMap = new Map();

  for (const i of arr) {
    if (myMap.has(i)) myMap.set(i, myMap.get(i) + 1);
    else myMap.set(i, 1);
  }

  let mySet = new Set();

  for (const i of myMap.values()) {
    if (mySet.has(i)) return false;
    else mySet.add(i);
  }

  return true;
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
