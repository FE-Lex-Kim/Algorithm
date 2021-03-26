// 문제유형 : 그리디

// 배열안에 수업시작시간 끝나는시간이 적혀있다.
// 중복되지 않은 최대한 많은 수업을 듣는 프로그램 작성
const course_selection = (arr) => {
  arr.sort((a, b) => a[1] - b[1]);
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1][1] < arr[i][0]) {
      answer = [...answer, arr[i]];
    }
  }
  console.log(answer);
};

course_selection([
  [6, 10],
  [2, 3],
  [4, 5],
  [1, 7],
  [6, 8],
  [9, 10],
]);

course_selection([
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
  [5, 9],
]);

course_selection([
  [4, 7],
  [2, 5],
  [1, 3],
  [8, 10],
  [5, 9],
  [2, 5],
  [13, 16],
  [9, 11],
  [1, 8],
]);
