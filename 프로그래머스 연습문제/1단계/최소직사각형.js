function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  // 1. 가로 세로중 큰 값을 비교
  // 2. 가로 세로중 큰 값을 width에 넣음
  //    2.1 큰 값이 width보다 크다면 변경
  //    2.2 작은 값이 height 보다 크다면 변경
  // 3. 가로 세로 큰 값을 곱함

  for (let i = 0; i < sizes.length; i++) {
    const card = sizes[i];
    for (let j = 0; j < card.length; j++) {
      const [width, height] = card;
      const max = Math.max(width, height);
      const min = Math.min(width, height);

      if (maxWidth < max) maxWidth = max;
      if (maxHeight < min) maxHeight = min;
    }
  }

  return maxHeight * maxWidth;
}

const sizes1 = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]; //4000

const sizes2 = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]; //120

const sizes3 = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]; //133

console.log(solution(sizes3));
