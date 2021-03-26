// 문제 유형 : 그리디

// 모험가가 N명일때 각각 모험가별로 가지고 있는 공포도의 숫자만큼 x명으로 구성되어야한다.
// 여행을 떠날수있는 최대 그룹수를 구해야한다.

//ex) 2,3,1,2,2 -> [1,2,3], [2,2] 2개 그룹 가능

const test = (str) => {
  let headcount;
  let count = 0;
  for (let line of str.split("\n")) {
    if (line.length === 1) {
      headcount = +line;
      continue;
    }
    const arr = line.split(" ");
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      headcount = headcount - arr[i];
      if (headcount <= 0) {
        break;
      }
      count++;
    }
  }
  console.log(count);
};

test(`5
1 3 2 2 1`);
