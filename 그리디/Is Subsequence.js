var isSubsequence = function (s, t) {
  let k = 0;
  for (const i of s) {
    let count = 0;
    for (let j = k; j < t.length; j++) {
      if (i === t[j]) {
        k = ++j;
        count++;
        break;
      }
    }
    if (count === 0) {
      return false;
    }
  }

  return true;
};

// good solution
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === j[j]) {
      i++;
    }

    j++;
  }
};

// nice and best solution
var isSubsequence = function (s, t) {
  let sSplit = s.split("");
  let tSplit = t.split("");
  while (sSplit.length > 0) {
    if (tSplit.indexOf(sSplit[0]) === -1) {
      return false;
    } else {
      tSplit.splice(0, tSplit.indexOf(sSplit[0]) + 1);
      sSplit.shift();
    }
  }

  return sSplit.length === 0 ? true : false;
};

console.log(isSubsequence("aaaaaa", "bbaaaa"));
