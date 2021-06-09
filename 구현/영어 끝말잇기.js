function solution(n, words) {
  let personNum = 0;
  let turn = 0;

  for (let i = 1; i < words.length; i++) {
    let cur = words[i];
    let prev = words[i - 1];

    if (prev[prev.length - 1] !== cur[0] || words.indexOf(cur) < i) {
      personNum = (i % n) + 1;
      turn = Math.ceil((i + 1) / n);

      return [personNum, turn];
    }
  }

  return [personNum, turn];
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);
