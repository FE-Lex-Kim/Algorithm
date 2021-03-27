// 유클리드 호제법을 이용한 최대공약수 구하기
// 유클리드 호제법 : a = 192, b = 162 라고하면
// a를 b로 나눈 나머지가 r이라면 a와 b의 최대 공약수는 r과 b의 최대 공약수와 같다.

const gcd = (a, b) => {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
};

console.log(gcd(192, 162));
