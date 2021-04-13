function solution(w, h) {
  const gcd = (a, b) => {
    if (a % b === 0) {
      return b;
    } else {
      return gcd(b, a % b);
    }
  };

  return w * h - (w + h - gcd(w, h));
}

solution(8, 12); // 80
