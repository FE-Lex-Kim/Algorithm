// 문제 유형 : 그리디

// 배열안에 사람이 기다려야할 시간이 적혀있고
// 그 시간 만큼 다음 사람은 기다려주어야 한다.
// 기다리는 시간을 최소화한 시간은?

const min_fee = (arr) => {
  arr.sort((a, b) => a - b);
  let totalWaittingTime = 0;
  let timeArr = [];

  for (let i = 0; i < arr.length; i++) {
    totalWaittingTime += arr[i];
    timeArr = [...timeArr, totalWaittingTime];
  }

  let answer = timeArr.reduce((acc, cur) => acc + cur, 0);
  console.log(answer);
};

min_fee([6, 11, 4, 1]);
min_fee([3, 2, 1]);
min_fee([3, 1, 4, 3, 2]);
min_fee([8, 4, 2, 3, 9, 23, 6, 8]);
