/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (s.match(/[\w!@#$%^&*()_+-=',.:]+/g) === null) {
    return 0;
  }
  return s.match(/[\w!@#$%^&*()_+-=',.:]+/g).length;
};

var countSegments = function (s) {
  return s.split(" ").filter(Boolean).length;
};
console.log(countSegments("    "));
