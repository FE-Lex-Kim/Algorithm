/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  for (let i = 0; i < pieces.length; i++) {
    let numArr = pieces[i];
    let arr2 = [];
    for (let j = 0; j < numArr.length; j++) {
      let num = numArr[j];
      let idx = arr.indexOf(num);
      if (idx === -1) {
        return false;
      }
      arr2.push(idx);
    }

    for (let k = 0; k < arr2.length - 1; k++) {
      if (arr2[k] + 1 !== arr2[k + 1]) {
        return false;
      }
    }
  }

  return true;
};

// pieces 배열 요소들과 arr을 문자열로 바꾼뒤 arr문자열에서 piece의 문자열 요소가 있는지 확인
// 이후 arr 문자열과 total 문자열 길이 비교
var canFormArray = function (arr, pieces) {
  arr = arr.join("");
  let total = "";
  for (let i = 0; i < pieces.length; i++) {
    let str = "";
    let piece = pieces[i];
    for (let j = 0; j < piece.length; j++) {
      str += piece[j];
    }
    if (arr.indexOf(str) === -1) return false;
    total += str;
  }

  return total.length === arr.length;
};

var canFormArray = function (arr, pieces) {
  let map = new Map();
  for (let i = 0; i < pieces.length; i++) {
    let nums = pieces[i];
    map.set(nums[0], nums);
  }

  for (let j = 0; j < arr.length; j++) {
    let num = arr[j];
    if (map.has(num)) {
      if (
        arr.slice(j, j + map.get(num).length).join("") !== map.get(num).join("")
      ) {
        return false;
      }
      j += map.get(num).length - 1;
    } else {
      return false;
    }
  }

  return true;
};
console.log(canFormArray([4, 64, 78], [[78], [4, 64]]));
