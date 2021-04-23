/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let Acount = 0;
  let Lcount = 0;

  // 결석 체크
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      Acount++;
      Lcount = 0;
    } else if (s[i] === "L") {
      Lcount++;
    } else {
      Lcount = 0;
    }
    if (2 <= Acount || 3 <= Lcount) {
      return false;
    }
  }

  //   if (2 <= s.split("LLL").length) {
  //     return false;
  //   }

  return true;
};

console.log(checkRecord("LPLPLPLPLPL"));
