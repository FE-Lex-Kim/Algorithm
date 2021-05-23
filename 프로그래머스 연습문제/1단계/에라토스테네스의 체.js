function solution(n) {
  // n까지의 배열을 만들어준다.
  // 요소가 true이면 소수라는 의미이다.
  let arr = Array.from({ length: n + 1 }, () => true);

  // 0 과 1은 소수가 아니므로 false를 넣어준다.
  arr[0] = false;
  arr[1] = false;

  // i를 2로 설정해준다. 1과 0은 소수가 아니므로
  for (let i = 2; i < n + 1; i++) {
    // 만약 arr[i] 가 소수가 아닌경우(이미 자연수로 계산된 경우) 넘겨준다.
    if (arr[i] === false) continue;

    // 만약 소수인경우 그 해당값을 한번더 더한 값부터 시작한다(j = i + i)
    // j가 j의 배수만큼 증가 시키기 위해 i만 큼 더해준다.
    for (let j = i + i; j < n + 1; j += i) {
      // 그 해당 값만큼 false로 바꾸어준다.
      // 소수는 자기 자신과 1로만 나누어 지기때문에.
      arr[j] = false;
    }
  }

  // 요소가 true인 즉, 소수인 경우만 걸러준다.
  arr = arr.filter((v) => v);

  return arr.length;
}

solution(5);
