// 문제유형 : 정렬
// 첫 번째 줄에 N(N개의 원소개수), K(K번 바꿔치기)가 공백을 기준으로 구분되어 입력된다.
// 두 번째 줄에 배열 A의 원소들이 공백을 기준으로 구분되어입력된다.
// 세 번째 줄에 배열 B의 원소들이 공백을 기준으로 구분되어입력된다.

// 최대 k번의 바꿔치기 연산을 수행하여 만들 수 있는 배열 A의 모든 원소의 합을 최댓값을 출력한다.

const test = (str) => {
  let N;
  let K;
  let splitArr = [];
  let arr1 = [];
  let arr2 = [];
  for (let line of str.split("\n")) {
    if (line.split(" ").length === 2) {
      N = +line.split(" ")[0];
      K = +line.split(" ")[1];
      continue;
    }
    splitArr = [...splitArr, line.split(" ")];
  }
  arr1 = splitArr[0];
  arr2 = splitArr[1];

  arr1.sort((a, b) => +a - +b);
  arr2.sort((a, b) => +b - +a);

  for (let i = 0; i < K; i++) {
    arr1.splice(i, 1, arr2[i]);
  }

  console.log(arr1.reduce((acc, cur) => acc + +cur, 0));
};

test(`5 3
1 2 5 4 3
5 5 6 6 5`);
