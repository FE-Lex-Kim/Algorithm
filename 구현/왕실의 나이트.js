// 문제유형: 시뮬레이션, 완전탐색, 구현
// 8 * 8 좌표 평면상 나이트가 이동할 수 있는 경우의 수 구하는 프로그램 작성

const knight = (str) => {
  let colum = str.charCodeAt(0) - 96;
  let row = +str[1];
  let count = 0;

  const step = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
  ];

  for (let i = 0; i < step.length; i++) {
    let nextRow = row + step[i][0];
    let nextColum = colum + step[i][1];

    if (nextColum < 1 || nextColum > 8 || nextRow < 1 || nextRow > 8) continue;
    count++;
  }

  console.log(count);
};

knight("c2");
