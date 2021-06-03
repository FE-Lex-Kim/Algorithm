function solution(dirs) {
  var answer = 0;
  let record = new Map();
  // U, D, R, L
  let direct = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  let cur = [0, 0];
  // 1. 현재 위치에서 다음위치로 이동 할때 그 다음 값이 undefined 인 경우 실행 하지 않고 continue 시켜준다.
  // 2. 이동 하기전에 현재 위치와, 다음 이동위치를 record 배열에서 있었는지 확인하고 있었으면 answer에 count하지 않는다.
  // 3. 현재 위치에서 -> 다음 이동 위치를 배열로 넣어 이동위치를 기억하고 count 값을 1 증가시킨다.
  // 4. dirs 의 모든 배열 순환을 마치면 종료한 뒤 return answer 를 해준다.

  for (let i = 0; i < dirs.length; i++) {
    let move = dirs[i];
    let reverseDr;
    let nx;
    let ny;
    // let nx = cur[0] + direct[j][0];
    // let ny = cur[1] + direct[j][1];
    switch (move) {
      case "U":
        reverseDr = "D";
        nx = cur[0] + direct[0][0];
        ny = cur[1] + direct[0][1];
        break;
      case "D":
        reverseDr = "U";
        nx = cur[0] + direct[1][0];
        ny = cur[1] + direct[1][1];
        break;
      case "R":
        reverseDr = "L";
        nx = cur[0] + direct[2][0];
        ny = cur[1] + direct[2][1];
        break;
      case "L":
        reverseDr = "R";
        nx = cur[0] + direct[3][0];
        ny = cur[1] + direct[3][1];
        break;
      default:
        break;
    }

    if (nx < -5 || 5 < nx || ny < -5 || 5 < ny) {
      continue;
    }

    // 다음에 움직일 위치를 확인하고 그 위치에 방문한적이 있는지를 키로 확인한다.
    // 방문한적이 있으면 값으로 상하좌우중 어디서 방문했었는지 적어 놓는다.
    // 다음 위치를 방문하지 않았다면 count를 ++ 해준다.

    if (record.has(`${nx}${ny}`)) {
      if (record.get(`${nx}${ny}`).includes(move)) {
      } else {
        // 방문한적 있음 O, 그쪽길로는 안감 X
        record.set(`${nx}${ny}`, [...record.get(`${nx}${ny}`), move]);
        if (record.has(`${cur[0]}${cur[1]}`)) {
          record.set(`${cur[0]}${cur[1]}`, [
            ...record.get(`${cur[0]}${cur[1]}`),
            reverseDr,
          ]);
        } else {
          record.set(`${cur[0]}${cur[1]}`, [reverseDr]);
        }
        answer++;
      }
    } else {
      // 방문한적 없음 X
      record.set(`${nx}${ny}`, [move]);
      if (record.has(`${cur[0]}${cur[1]}`)) {
        record.set(`${cur[0]}${cur[1]}`, [
          ...record.get(`${cur[0]}${cur[1]}`),
          reverseDr,
        ]);
      } else {
        record.set(`${cur[0]}${cur[1]}`, [reverseDr]);
      }
      answer++;
    }

    cur = [nx, ny];
  }
  //   return answer;
  return answer;
}

solution("LLLRR");
