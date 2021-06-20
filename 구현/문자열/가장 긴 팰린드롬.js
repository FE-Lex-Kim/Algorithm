function solution(s) {
  var answer = 1;
  for (let i = 0; i < s.length; i++) {
    let startIdx = i;
    let lastIdx = s.length - 1;
    let copyLastIdx = lastIdx;
    while (startIdx < copyLastIdx) {
      let startLetter = s[startIdx];
      let lastLetter = s[copyLastIdx];
      if (startLetter !== lastLetter) {
        startIdx = i;
        lastIdx = lastIdx - 1;
        copyLastIdx = lastIdx;
        continue;
      }

      copyLastIdx = copyLastIdx - 1;
      startIdx = startIdx + 1;
    }
    answer = Math.max(answer, lastIdx - i + 1);
  }
  return answer;
}

solution("abacde");
