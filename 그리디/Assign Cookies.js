var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  // g[0] 보다 큰 s[index] 부터 탐색을 시작한다.
  // 사실 파라메트릭 서치 하면 제일 좋을것 같지만 일단 시간초과 판정은 안나올것 같으니깐 진행
  // 교훈 : 만약 두 배열을 비교할때 크거나 같은 경우를 상위 반복문으로 두자.
  // 또는 두 배열을 비교할때 서로 다르게 반복문을 바꾸어보자
  let answer = 0;
  let j = 0;
  for (const n of s) {
    if (g[j] <= n) {
      answer++;
      j++;
    }
  }
  return answer;
};

console.log(findContentChildren([2, 5, 8], [1, 2, 3, 4, 5])); // 2
