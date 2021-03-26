// 문제유형 : 구현, 완전탐색
// 시간 N이 주어지면 05:00:00 그 시간동안 3이라는 숫자가 단 하나라도 있는 경우의 수 출력

const countThree = (num) => {
  let count = 0;
  for (let i = 0; i < num + 1; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (`${i}${j}${k}`.includes("3")) {
          count++;
        }
      }
    }
  }
  console.log(count);
};

countThree(5);
