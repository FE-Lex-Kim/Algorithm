function solution(n, works) {
  var answer = 0;
  for (let i = 0; i < n; i++) {
    let max = 0;
    let maxIdx = 0;
    for (let i = 0; i < works.length; i++) {
      let cur = works[i];
      if (max < cur) {
        max = cur;
        maxIdx = i;
      }
    }
    if (works[maxIdx] === 0) {
      return 0;
    }
    works[maxIdx] = works[maxIdx] - 1;
  }

  answer = works.reduce((acc, cur) => acc + cur ** 2, 0);
  return answer;
}
solution(3, [1, 1]);
