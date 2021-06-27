function solution(n, stations, w) {
  var answer = 0;

  let start = 1;
  let distance = 2 * w + 1;

  for (let i = 0; i < stations.length; i++) {
    let curStation = stations[i];
    let firstDistanceStation = curStation - w;
    let notDistance = firstDistanceStation - start;

    answer += Math.ceil(notDistance / distance);
    start = curStation + w + 1;
  }

  let left = Math.ceil((n - start + 1) / distance);

  if (0 < left) answer += left;

  return answer;
}

solution(16, [9], 2);
