function solution(n, times) {
  times.sort((a, b) => a - b);
  let start = 1;
  let end = n * times[times.length - 1];
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    let possibleEnter = times.reduce(
      (acc, cur) => acc + Math.floor(mid / cur),
      0
    );

    if (possibleEnter <= n) {
      end = mid;
    } else if (possibleEnter < n) {
      start = mid + 1;
    }
  }

  return end;
}

solution(6, [7, 10]);
