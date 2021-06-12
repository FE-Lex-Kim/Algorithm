function solution(jobs) {
  let n = jobs.length;
  let answer = 0;
  jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let finishTime = 0;
  while (jobs.length) {
    let idx = -1;
    let fastestTime = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < jobs.length; i++) {
      const [requestTime, processTime] = jobs[i];
      if (requestTime <= finishTime) {
        if (processTime < fastestTime) {
          fastestTime = processTime;
          idx = i;
        }
      }
    }
    if (idx === -1) {
      const [requestTime, processTime] = jobs[0];
      finishTime = requestTime + processTime;
      answer += processTime;
      jobs.splice(0, 1);
      continue;
    }
    const [requestTime, processTime] = jobs[idx];
    finishTime += processTime;
    answer += finishTime - requestTime;
    jobs.splice(idx, 1);
  }

  return Math.floor(answer / n);
}

solution([
  [24, 10],
  [28, 39],
  [43, 20],
  [37, 5],
  [47, 22],
  [20, 47],
  [15, 34],
  [15, 2],
  [35, 43],
  [26, 1],
]);
