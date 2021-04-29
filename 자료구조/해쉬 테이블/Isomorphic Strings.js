/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    let tLetter = t[i];
    if (!sMap.has(sLetter) && !tMap.has(tLetter)) {
      sMap.set(sLetter, tLetter);
      tMap.set(tLetter, sLetter);
    } else {
      if (sMap.get(sLetter) !== tLetter || tMap.get(tLetter) !== sLetter) {
        return false;
      }
    }
  }

  return true;
};

console.log(isIsomorphic((s = "egg"), (t = "add")));
