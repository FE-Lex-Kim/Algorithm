/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let res = [];
  people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
  people.forEach((val) => {
    res.splice(val[1], 0, val);
  });
  return res;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
); // [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
