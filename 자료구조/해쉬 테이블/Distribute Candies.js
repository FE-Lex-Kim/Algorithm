/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let set = new Set(candyType);
  let N = candyType.length / 2;

  if (set.size <= N) return set.size;
  else return N;
};
console.log(distributeCandies([6, 6, 6, 6]));
