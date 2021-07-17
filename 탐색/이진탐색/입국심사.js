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

    if (possibleEnter >= n) {
      end = mid;
    } else if (possibleEnter < n) {
      start = mid + 1;
    }
  }

  return end;
}

solution(6, [7, 10]);

/* 
오답노트 : 
1. 정답을 도출하는 로직을 생각하지 못함.
2. 직접 하나하나 구현하는 코드가 길어지는 프로그래밍이라면 코테에서 나올 확률이 적으므로,
    정답이 나오는 다른 로직이 있다고 고려해보기
3. 이진탐색에서 mid만을 target에 비교하는 것이아니라, 
    mid값을 추가적으로 가공해서 나온 값을 target과 비교해서 나올 수 있음을 몰랐음
*/
