function solution(N, number) {
  let set = Array.from({ length: 8 }, () => new Set());
  for (let i = 0; i < 8; i++) {
    set[i].add(+`${N}`.repeat(i + 1));
    for (let j = 0; j < i; j++) {
      for (const setNum1 of set[j]) {
        for (const setNum2 of set[i - j - 1]) {
          set[i].add(setNum1 + setNum2);
          set[i].add(setNum1 - setNum2);
          set[i].add(setNum1 * setNum2);
          set[i].add(setNum1 / setNum2);
        }
      }
    }
    if (set[i].has(number)) return i + 1;
  }

  return -1;
}

console.log(solution(5, 12));
