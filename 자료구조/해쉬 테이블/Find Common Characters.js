/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let arr = A[0].split("");
  // 각각의 A 요소를 반복해서 돈다. 1부터 시작
  for (let i = 1; i < A.length; i++) {
    let arr1 = A[i].split("");
    arr = arr.filter((v) => {
      let idx = arr1.indexOf(v);
      if (idx === -1) {
        return false;
      } else {
        arr1.splice(idx, 1);
        return true;
      }
    });
  }

  return arr;
};
console.log(
  commonChars([
    "daaccccd",
    "adacbdda",
    "abddbaba",
    "bacbcbcb",
    "bdaaaddc",
    "cdadacba",
    "bacbdcda",
    "bacdaacd",
  ])
);
