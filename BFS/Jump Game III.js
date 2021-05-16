/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let queue = [start];
  while (queue.length !== 0) {
    let idx = queue.shift();
    if (arr[idx] === 0) {
      return true;
    }

    if (idx < 0 || arr.length <= idx || arr[idx] < 0) {
      continue;
    }

    let next = idx + arr[idx];
    let prev = idx - arr[idx];
    arr[idx] = -1;

    queue.push(next);
    queue.push(prev);
  }

  return false;
};

console.log(canReach([3, 0, 2, 1, 2], 2));
