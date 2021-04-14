var countGoodRectangles = function (rectangles) {
  /* 
    1. rectangle 배열을 반복적으로 돌아준다. i 
    2. rec[i]에서 가장 작은 값을 찾는다. Math.min(...rec[i])
    3. Math.min(...rec[i])을 arr 에 push 해준다.
    4. arr에서 가장큰 값을 찾는다.
    5. 가장큰 값과 같은 값이 여러개인지 찾는다. arr.filter( 가장큰값만 남김)
    6. length가 정답~

    * width : 가로, length: 세로, height: 높이(3차원), side length: 한쪽 면
     */

  let arr = [];
  for (let i = 0; i < rectangles.length; i++) {
    arr.push(Math.min(...rectangles[i]));
  }

  let maxLength = Math.max(...arr);

  arr = arr.filter((v) => v === maxLength);

  return arr.length;
};

countGoodRectangles([
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
]); // 3
