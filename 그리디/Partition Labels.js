/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let answer = [];
  let setArr = [...new Set(S)];
  let hash = {};

  // 마지막 인덱스 찾는법
  // setArr을 돌아준다
  for (let i = 0; i < setArr.length; i++) {
    // S 문자열을 돌아준다.
    for (let j = S.length - 1; 0 <= j; j--) {
      if (setArr[i] === S[j]) {
        hash[setArr[i]] = j;
        break;
      }
    }
  }
  let start = 0;
  let end = hash[S[0]];
  // start부터 돌아준다.
  while (start < S.length) {
    for (let j = start; j < end; j++) {
      let curAlphabet = S[j];
      if (end < hash[curAlphabet]) {
        end = hash[curAlphabet];
      }
    }
    answer.push([S.slice(start, end + 1)]);
    start = end + 1;
    end = hash[S[end + 1]];
  }

  answer = answer.map((v) => v[0].length);

  return answer;
};

// nice solution
var partitionLabels = function (S) {
  if (!S || !S.length) return null;
  let res = [];
  let lastIndices = new Array(26).fill(0);
  for (let i = 0; i < S.length; i++) {
    lastIndices[S.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, lastIndices[S.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i == end) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }
  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
