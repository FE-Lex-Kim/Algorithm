/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let answer = [];
  let map1 = new Map();
  let map2 = new Map();

  for (const i of nums1) {
    if (map1.has(i)) map1.set(i, [...map1.get(i), i]);
    else map1.set(i, [i]);
  }

  for (const i of nums2) {
    if (map2.has(i)) map2.set(i, [...map2.get(i), i]);
    else map2.set(i, [i]);
  }

  for (const [key, value] of map1.entries()) {
    let get = map2.get(key);
    if (map2.has(key)) {
      if (get.length < value.length) {
        answer = [...answer, ...get];
      } else {
        answer = [...answer, ...value];
      }
    }
  }

  return answer;
};

var intersect = function (nums1, nums2) {
  let map = new Map();

  for (const i of nums1) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  let answer = [];

  for (let i = 0; i < nums2.length; i++) {
    let num2 = nums2[i];
    if (map.get(num2)) {
      answer.push(num2);
      map.set(num2, map.get(num2) - 1);
    }
  }
  return answer;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));
