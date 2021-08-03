function solution(s) {
  let map = new Map();
  const arr = s
    .match(/[,0-9]+/g)
    .filter((v) => v !== ",")
    .map((v) => v.match(/[0-9]+/g));

  for (const str of arr) {
    for (const letter of str) {
      if (!Number(letter)) continue;

      if (map.has(+letter)) map.set(+letter, map.get(+letter) + 1);
      else map.set(+letter, 1);
    }
  }

  return [...map.entries()].sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
