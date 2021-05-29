function solution(brown, yellow) {
  for (let yWidth = yellow; 0 < yWidth; yWidth--) {
    if (yellow % yWidth === 0) {
      const yLength = yellow / yWidth;
      const bWidth = yWidth + 2;
      const bLength = yLength + 2;
      if (bWidth * bLength - yellow === brown) {
        return [bWidth, bLength];
      }
    }
  }
}

console.log(solution(10, 2));
