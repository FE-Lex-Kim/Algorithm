// 문제유형 : 완전 탐색
function solution(answers) {
  var answer = [];
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let realArr1 = [];
  let realArr2 = [];
  let realArr3 = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < answers.length; i++) {
    realArr1.push(arr1[i % 5]);
    realArr2.push(arr2[i % arr2.length]);
    realArr3.push(arr3[i % arr3.length]);
  }

  for (let i = 0; i < answers.length; i++) {
    if (realArr1[i] === answers[i]) {
      count1++;
    }
    if (realArr2[i] === answers[i]) {
      count2++;
    }
    if (realArr3[i] === answers[i]) {
      count3++;
    }
  }

  let max = Math.max(count1, count2, count3);

  if (count1 === max) {
    answer.push(1);
  }
  if (count2 === max) {
    answer.push(2);
  }
  if (count3 === max) {
    answer.push(3);
  }

  answer.sort((a, b) => a - b);

  return answer;
}

solution([1, 2, 3, 4, 5]); // 1
