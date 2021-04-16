// 문제유형 : 시뮬레이션

var robotSim = function (commands, obstacles) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let x = 0,
    y = 0,
    di = 0;

  obstacleSet = new Set(
    obstacles.map((obs) => obs[0].toString() + "#" + obs[1].toString())
  );

  let ans = 0;
  for (let cmd of commands) {
    if (cmd == -2)
      // left
      di = (di + 3) % 4;
    else if (cmd == -1)
      // right
      di = (di + 1) % 4;
    else {
      for (let k = 0; k < cmd; ++k) {
        let nx = x + dx[di];
        let ny = y + dy[di];
        let code = nx.toString() + "#" + ny.toString();
        if (!obstacleSet.has(code)) {
          x = nx;
          y = ny;
          ans = Math.max(ans, x * x + y * y);
        }
      }
    }
  }

  return ans;
};
