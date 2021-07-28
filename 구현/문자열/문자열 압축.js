function solution(s) {
  var answer = Number.MAX_SAFE_INTEGER;

  for (let n = 1; n < Math.floor(s.length / 2) + 1; n++) {
    let count = 1;
    let result = "";
    for (let j = 0; j < s.length; j = j + n) {
      let cur = s.slice(j, j + n);
      let next = s.slice(j + n, j + n + n);

      if (cur === next) {
        count += 1;
        continue;
      }

      if (cur !== next) {
        result += count === 1 ? cur : count + cur;
        count = 1;
        continue;
      }
    }
    answer = Math.min(answer, result.length);
  }

  return answer;
}

solution("ab");
