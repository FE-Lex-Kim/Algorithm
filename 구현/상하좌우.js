// 문제유형 : 구현
// 첫째줄은 공간의 크기
// 둘째줄은 이동할 위치

// 기존위치는 항상(1,1)
// R은 오른쪽 L은 왼쪽 U는 위 D는 아래로 이동
// 최종위치 출력

// 첫번째 풀이
const moveLocation1 = (str) => {
  let length = 0;
  for (let line of str.split("\n")) {
    if (!isNaN(+line)) {
      length = +line;
      continue;
    }

    const arr = line.split(" ");
    let curLocation = [1, 1];

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "R":
          if (curLocation[1] === length) break;
          curLocation = [curLocation[0], curLocation[1] + 1];
          break;
        case "L":
          if (curLocation[1] === 1) break;
          curLocation = [curLocation[0], curLocation[1] - 1];
          break;
        case "U":
          if (curLocation[0] === 1) break;
          curLocation = [curLocation[0] - 1, curLocation[1]];
          break;
        case "D":
          if (curLocation[0] === length) break;
          curLocation = [curLocation[0] + 1, curLocation[1]];
          break;

        default:
          break;
      }
    }
    console.log(curLocation);
  }
};

// 다른 방식의 풀이
const moveLocation = (str) => {
  let length = 0;
  let x = 1;
  let y = 1;

  const moveTypes = ["R", "L", "U", "D"];
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  for (let line of str.split("\n")) {
    if (!isNaN(+line)) {
      length = +line;
      continue;
    }

    const movePlans = line.split(" ");
    for (let i = 0; i < movePlans.length; i++) {
      let nx;
      let ny;
      for (let j = 0; j < moveTypes.length; j++) {
        if (movePlans[i] === moveTypes[j]) {
          nx = x + dx[j];
          ny = y + dy[j];
        }
      }
      if (nx < 1 || ny < 1) continue;
      x = nx;
      y = ny;
    }
  }
  console.log(`(${x}, ${y})`);
};

moveLocation(`5
R R R U D D`);
