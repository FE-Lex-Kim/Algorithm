function solution(places) {
  var answer = [];
  /*  
  1. 각 p의 좌표를 구하기,
  2. p 의 좌표 변수를 location이라고 했을때, 각각 좌표별로 다른 p좌표와 겹치는지 확인.
  3-1. 겹치지 않는다면, 다음 p 좌표확인
  3-2. 겹친다면 그 사이에 X가 있는지 확인,
    3-2-1 X가 있으면 다음 P 확인,
    3-2-2 X가 없으면 반복문 종료후 answer에 1 push
  */
  let location = Array.from({ length: places.length }, () => []);

  for (let i = 0; i < places.length; i++) {
    for (let x = 0; x < places.length; x++) {
      for (let y = 0; y < 5; y++) {
        let cur = places[i][x][y];
        if (cur === "P") {
          location[i].push([x, y]);
        }
      }
    }
  }

  //   [ [ 0, 0 ], [ 0, 4 ], [ 2, 1 ], [ 2, 3 ], [ 4, 0 ], [ 4, 4 ] ],
  loop1: for (let i = 0; i < location.length; i++) {
    let room = location[i];
    for (let j = 0; j < room.length - 1; j++) {
      const [x1, y1] = room[j];

      for (let k = j + 1; k < room.length; k++) {
        const [x2, y2] = room[k];

        const manX = Math.abs(x1 - x2);
        const manY = +Math.abs(y1 - y2);
        const man = manX + manY;

        // 1. 바로 맞닿아 있는 경우
        if (man === 1) {
          answer.push(0);
          continue loop1;
        }

        //  맨허튼 거리가 2인경우
        if (man === 2) {
          // 2. 일직선인 경우
          if (manX === 2 || manY === 2) {
            if (places[i][(x1 + x2) / 2][(y1 + y2) / 2] !== "X") {
              answer.push(0);
              continue loop1;
            }
          }

          // 3. 대각선인 경우
          if (places[i][x1][y2] === "O" || places[i][x2][y1] === "O") {
            answer.push(0);
            continue loop1;
          }
        }
      }
    }
    answer.push(1);
  }

  return answer;
}

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
