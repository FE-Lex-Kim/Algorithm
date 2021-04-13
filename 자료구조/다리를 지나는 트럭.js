function solution(bridge_length, weight, truck_weights) {
  // 첫번째 트럭이 자난 시점이 1초이고 그이후 상황이기때문에 2초로 초기화
  let time = 2;

  // queue에는 현재 다리에 트럭이 들어간다.
  let queue = [truck_weights[0]];
  let sum = truck_weights[0];

  // 다리에 들어간 트럭이 빠져나올 시간을 넣어놓는다.
  let outTime = [1 + bridge_length];
  truck_weights.shift();
  while (queue.length !== 0) {
    if (outTime[0] === time) {
      sum -= queue[0];
      outTime.shift();
      queue.shift();
    }
    if (truck_weights.length !== 0) {
      if (sum + truck_weights[0] <= weight) {
        sum += truck_weights[0];
        queue.push(truck_weights[0]);
        outTime.push(time + bridge_length);
        truck_weights.shift();
      }
    }
    if (queue.length === 0) {
      break;
    }
    time++;
  }
  console.log(time);
  return time;
}

solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
