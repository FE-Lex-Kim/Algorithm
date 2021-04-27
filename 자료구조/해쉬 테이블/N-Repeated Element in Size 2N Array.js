/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  // time O(N)
  let N = A.length / 2;
  let hash = {};
  for (const i of A) {
    if (hash[i]) hash[i]++;
    else hash[i] = 1;
  }

  let arr = Object.entries(hash);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === N) {
      return +arr[i][0];
    }
  }
};

var repeatedNTimes = function (A) {
  let set = [...new Set(A)];
  let N = A.length / 2;

  for (let i = 0; i < set.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (set[i] === A[j]) {
        count++;
      }
    }

    if (count === N) return set[i];
  }
  // time O(N^2)
};

var repeatedNTimes = function (A) {
  let set = new Set();
  for (const i of A) {
    if (set.has(i)) return i;
    else set.add(i);
  }
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
