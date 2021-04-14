// 문제유형: 큐, 스택
function solution(bridge_length, weight, truck_weights) {
  // 첫번째 트럭이 자난 시점이 1초이고 그이후 상황이기때문에 2초로 초기화
  let time = 2;

  // queue에는 현재 다리에 트럭이 들어간다.
  let queue = [truck_weights[0]];
  let sum = truck_weights[0];

  // 다리에 들어간 트럭이 빠져나올 시간을 넣어놓는다.
  let outTime = [1 + bridge_length];

  // 첫번째 트럭을 제외해준다.
  truck_weights.shift();

  // 다리위에 트럭이 없을때까지 반복
  while (queue.length !== 0) {
    // 만약 제일 첫번째로 들어간 트럭이 다리에서 나갈 시간이라면
    if (outTime[0] === time) {
      sum -= queue[0];
      outTime.shift();
      queue.shift();
    }

    // 만약 트럭이 더이상 존재하지 않으면 실행시키지 않는다.
    if (truck_weights.length !== 0) {
      // 기존 다리에 올라가있는 트럭의 총 무게와 다음 트럭이 올라갈 무게를 합할때 다리가 지탱할 수 있는 무게인지 확인
      if (sum + truck_weights[0] <= weight) {
        sum += truck_weights[0];
        queue.push(truck_weights[0]);
        outTime.push(time + bridge_length);
        truck_weights.shift();
      }
    }

    // 만약 다리에 트럭이 없으면 시간을 더해주지 않고 종료시켜준다.
    if (queue.length === 0) {
      break;
    }
    time++;
  }
  console.log(time);
  return time;
}

solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
