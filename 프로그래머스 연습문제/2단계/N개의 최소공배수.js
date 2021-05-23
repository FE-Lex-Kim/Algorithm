function solution(arr) {
  let max = arr[0];

  function fc(n, m) {
    let min;
    let max;
    const gcd = (a, b) => {
      if (a % b === 0) {
        return b;
      } else {
        return gcd(b, a % b);
      }
    };
    if (m < n) {
      min = gcd(m, n);
    } else {
      min = gcd(n, m);
    }
    // 최소 공배수 구하기
    // 각각의 수 x 각각의 수의 최대공약수 = 최소 공배수
    max = (n * m) / min;
    return max;
  }

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    max = fc(max, cur);
  }

  return max;
}

solution([2, 6, 8, 14]);
// [2,6,8,14]	168
