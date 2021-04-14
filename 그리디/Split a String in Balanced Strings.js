// leetcode
// 문제 유형: 그리디

var balancedStringSplit = function (s) {
  let RCount = 0;
  let LCount = 0;
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      RCount++;
    } else {
      LCount++;
    }

    if (RCount === LCount) {
      answer++;
    }
  }
  return answer;
};

balancedStringSplit("RLRRRLLRLL"); // 2
