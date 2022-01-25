function solution(n) {
  n = n - 1;

  // (n-1) 값중 나눌 수 있는 최솟값
  // 가장 작은 값 구하는 방법
  for (let i = 2; i < n + 1; i++) {
    if (n % i === 0) return i;
  }
}
const n1 = 10; //3
const n2 = 12; //11

console.log(solution(n1));
