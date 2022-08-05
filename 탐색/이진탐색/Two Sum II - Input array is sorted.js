/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let length = numbers.length;
  for (let i = 0; i < length; i++) {
    let cur = numbers[i];
    let start = i + 1;
    let end = length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let sum = cur + numbers[mid];
      if (sum === target) {
        return [i + 1, mid + 1];
      } else if (target < sum) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
};

var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let startElement = numbers[start];
    let endElement = numbers[end];

    if (startElement + endElement < target) {
      start++;
    } else if (startElement + endElement > target) {
      end--;
    } else {
      return [start + 1, end + 1];
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));
