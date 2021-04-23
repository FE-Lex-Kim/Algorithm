/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let alpha = +coordinates[0].charCodeAt() - 97;
  let num = +coordinates[1];

  // 흑색 인경우
  if (
    (num % 2 === 1 && alpha % 2 === 0) ||
    (num % 2 === 0 && alpha % 2 === 1)
  ) {
    return false;
  } else {
    return true;
  }
};

console.log(squareIsWhite("h8"));
