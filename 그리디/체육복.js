function solution(n, lost, reserve) {
  var answer = 0;
  let realReserve = [...reserve];

  for (let i = 0; i < reserve.length; i++) {
    let cur = lost.indexOf(reserve[i]);
    if (cur !== -1) {
      realReserve = realReserve.filter((v) => v !== reserve[i]);
      lost.splice(cur, 1);
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    let prev = lost.indexOf(realReserve[i] - 1);
    if (prev !== -1) {
      lost.splice(prev, 1);
      continue;
    }

    let next = lost.indexOf(realReserve[i] + 1);
    if (next !== -1) {
      lost.splice(next, 1);
      continue;
    }
  }

  return n - lost.length;
}

solution(5, [2, 3, 4], [1, 2, 3]);
