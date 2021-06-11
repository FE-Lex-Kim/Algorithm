function solution(n) {
  var ans = 0;
  while (2 <= n) {
    ans += n % 2;
    n = Math.floor(n / 2);
  }
  ans += n;

  return ans;
}

solution(5000);
