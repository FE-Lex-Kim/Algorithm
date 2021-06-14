function solution(operations) {
  let queue = [];

  for (const order of operations) {
    if (order === "D 1") {
      if (!queue.length) continue;

      let max = Number.MIN_SAFE_INTEGER;
      let maxIdx = 0;
      for (let i = 0; i < queue.length; i++) {
        const element = queue[i];
        if (max < element) {
          maxIdx = i;
          max = element;
        }
      }
      queue.splice(maxIdx, 1);
      // 최댓값인 인덱스 찾기
    } else if (order === "D -1") {
      if (!queue.length) continue;

      let min = Number.MAX_SAFE_INTEGER;
      let minIdx = 0;
      for (let i = 0; i < queue.length; i++) {
        const element = queue[i];
        if (element < min) {
          minIdx = i;
          min = element;
        }
      }
      queue.splice(minIdx, 1);
    } else {
      let num = +order.split(" ")[1];
      queue.push(num);
    }
  }

  return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}

console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
// ["I 7","I 5","I -5","D -1"]
