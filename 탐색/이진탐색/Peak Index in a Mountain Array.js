/**
 * @param {number[]} arr
 * @return {number}
 */

// O(N)
var peakIndexInMountainArray = function (arr) {
  arr.indexOf(Math.max(...arr));
};

//O(logN)
var peakIndexInMountainArray = function (arr) {
  let length = Math.floor(arr.length / 2);
  let sumIdx = [0, 0];
  for (let start = 0, end = arr.length - 1; start <= length; start++, end--) {
    let startV = arr[start];
    let endV = arr[end];
    let max = Math.max(startV, endV, sumIdx[1]);

    if (max === startV) {
      sumIdx = [start, max];
    } else if (max === endV) {
      sumIdx = [end, max];
    }
  }

  return sumIdx[0];
};

var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let cur = arr[mid];
    let prev = arr[mid - 1];
    let next = arr[mid + 1];

    if (prev < cur && cur > next) return mid;
    if (prev < cur && cur < next) start = mid + 1;
    // end = mid - 1이 아니라 end = mid 인 이유는
    // mid = Math.floor((start + end) / 2);
    // 이라서 내림을 하기 때문에 mid 값은 항상 start 쪽으로 가게 되어 있어서
    // 만약 end가 1일때 mid는 1이 되는것이 아니라 0이 되므로 prev 값이 없어져 원하는 대로 동작하지 않는다.
    // 따라서 end = mid로 해주면 mid가 한단계씩 내려가서 괜찮다.
    if (prev > cur && cur > next) end = mid;
  }
};

console.log(peakIndexInMountainArray((arr = [3, 5, 3, 2, 0])));
