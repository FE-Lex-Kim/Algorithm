var minDeletionSize = function (strs) {
  let answer = 0;
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i + 1][j] < strs[i][j]) {
        answer++;
        break;
      }
    }
  }

  return answer;
};

minDeletionSize(["zyx", "wvu", "tsr"]); // 1
