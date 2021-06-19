function solution(routes) {
  var answer = 1;
  routes.sort((a, b) => a[1] - b[1]);
  let end = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    let [nxStart, nxEnd] = routes[i];
    if (end < nxStart) {
      answer++;
      end = nxEnd;
    }
  }

  return answer;
}

solution([
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
