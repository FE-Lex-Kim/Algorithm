/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  // 각각 단어 개수 객체로 만들기
  let sObj = s
    .split("")
    .reduce(
      (acc, cur) =>
        acc[cur] === undefined
          ? { ...acc, [cur]: 1 }
          : { ...acc, [cur]: acc[cur] + 1 },
      {}
    );

  let tObj = t
    .split("")
    .reduce(
      (acc, cur) =>
        acc[cur] === undefined
          ? { ...acc, [cur]: 1 }
          : { ...acc, [cur]: acc[cur] + 1 },
      {}
    );

  let tKey = Object.keys(tObj);
  let sKey = Object.keys(sObj);
  let tValue = Object.values(tObj);
  let sValue = Object.values(sObj);
  let answer = 0;

  for (let i = 0; i < tKey.length; i++) {
    let check = sKey.indexOf(tKey[i]);
    if (check !== -1) {
      if (tValue[i] <= sValue[check]) {
        answer += tValue[i];
      } else {
        answer += sValue[check];
      }
    }
  }

  return t.length - answer;
};

var minSteps = function (s, t) {
  let hash = {};
  let answer = 0;

  for (const i of s) {
    if (hash[i]) {
      hash[i]++;
    } else {
      hash[i] = 1;
    }
  }

  for (const i of t) {
    if (hash[i]) {
      hash[i]--;
    } else {
      answer++;
    }
  }

  return answer;
};

var minSteps = function (s, t) {
  let arr = Array.from({ length: 26 }, () => 0);
  let A = "a".charCodeAt();
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let sIdx = s[i].charCodeAt() - A;
    let tIdx = t[i].charCodeAt() - A;

    arr[sIdx]++;
    arr[tIdx]--;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      answer += arr[j];
    }
  }

  return answer;
};

console.log(minSteps("leetcode", "practice"));
