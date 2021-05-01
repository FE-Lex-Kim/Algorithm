/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let answer = [];
  for (const num of arr2) {
    arr1 = arr1.filter((v) => {
      if (num === v) {
        answer.push(v);
        return false;
      }

      return true;
    });
  }

  answer = [...answer, ...arr1.sort((a, b) => a - b)];
  return answer;
};

var relativeSortArray = function (arr1, arr2) {
  let answer = [];
  let map = new Map();
  for (const num of arr1) {
    if (map.has(num)) map.set(num, [...map.get(num), num]);
    else map.set(num, [num]);
  }

  for (const num of arr2) {
    if (map.has(num)) {
      answer.push(...map.get(num));
      map.delete(num);
    }
  }

  [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .forEach((v) => answer.push(...v[1]));

  return answer;
};

var relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }

  let sort1 = arr1
    .filter((v) => map.has(v))
    .sort((a, b) => map.get(a) - map.get(b));
  let sort2 = arr1.filter((v) => !map.has(v)).sort((a, b) => a - b);

  return [...sort1, ...sort2];
};

relativeSortArray(
  (arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]),
  (arr2 = [2, 1, 4, 3, 9, 6])
);
