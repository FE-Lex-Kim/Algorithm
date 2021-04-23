/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  let arr1 = a.split("");
  let diffArr = arr1.reduce((acc, cur, i) => {
    if (cur !== b[i]) {
      return [...acc, i];
    }

    return acc;
  }, []);

  // a와 b가 같을때 만약 a안에 공통된 값이 있으면 true 반환
  //   if (2 <= a.length && a === b) {
  //     let obj = arr1.reduce(
  //       (acc, cur) =>
  //         acc[cur] === undefined
  //           ? { ...acc, [cur]: 1 }
  //           : { ...acc, [cur]: acc[cur] + 1 },
  //       {}
  //     );

  //     for (const i of Object.values(obj)) {
  //       if (2 <= i) {
  //         return true;
  //       }
  //     }
  //   }

  if (2 <= a.length && a === b) {
    let s = new Set(a);
    return s.size < a.length;
  }

  if (a === b) {
    return false;
  }

  let firstIdx = diffArr[0];
  let secondIdx = diffArr[1];

  [arr1[firstIdx], arr1[secondIdx]] = [arr1[secondIdx], arr1[firstIdx]];

  return arr1.join("") === b;
};

console.log(buddyStrings("aabc", "aabc"));
