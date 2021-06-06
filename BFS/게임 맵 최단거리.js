function solution(maps) {
  var answer = 0;
  maps[0][0] = "1";
  let queqe = [[0, 0]];
  // 상하좌우
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (0 < queqe.length) {
    let [x, y] = queqe.shift();
    // 현재값이 undefined값이면 반복문을 넘긴다.

    // 상하좌우 값을 큐에 넣어준다.
    for (let i = 0; i < direction.length; i++) {
      const nx = x + direction[i][0];
      const ny = y + direction[i][1];

      // 그 상하좌우 값이 undefiend값이거나 1이 아닌 값이면 반복문을 건너 띈다.
      if (!maps[nx] || !maps[nx][ny] || maps[nx][ny] !== 1) {
        continue;
      }

      // 맞으면 큐에 넣어주고
      // 그다음 값을 현재값에서 +1 해준다.
      maps[nx][ny] = +maps[x][y] + 1;
      queqe.push([nx, ny]);
    }
  }

  return maps[maps.length - 1][maps[0].length - 1] === 1
    ? -1
    : maps[maps.length - 1][maps[0].length - 1];
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
