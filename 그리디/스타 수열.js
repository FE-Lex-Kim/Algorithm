/* 
스타 수열의 특징은 현재 공통된 집합의 요소가 이전요소 또는 다음 요소와 반드시 집합이 된다는 점이다.
멀리 떨어진 것과 스타 수열이 될 수 없다.
처음에 부분수열을 설명하는 부분에서 함정에 빠져서
부분 수열처럼 인덱스가 먼거리에서 스타수열을 만드는 경우도 고려하다보니 머리가 아파 햇갈렸던것 같다.

스타수열은 결국 이전, 앞 요소와 스타 수열로 이루어 진다는 점을 알았으면 힘들지 않게 풀었을것같다.
*/
function solution(a) {
  var answer = 0;
  let info = [];
  for (const num of a) {
    if (info[num]) info[num][1]++;
    else info[num] = [num, 1];
  }
  info = info.filter((v) => v);
  for (const [ele, count] of info) {
    if (count <= answer) continue;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i + 1] === undefined) continue;
      if (a[i] === a[i + 1]) continue;
      if (a[i] !== ele && a[i + 1] !== ele) continue;
      result++;
      i++;
    }
    answer = Math.max(answer, result);
  }
  return answer * 2;
}

solution([4, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3, 8]);
