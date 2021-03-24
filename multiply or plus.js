// 문제 유형 : 그리디
// 각자리수가 0~9로 이루어진 문자열 S가 주어졌을때 왼쪽 부터 오른쪽으로 모든 숫자를 확인하여
// 숫자사이에 x 또는 + 를 를 넣어 만들수있는 가장 큰 수를 구하는 프로그램 작성
// 모든 연산은 왼쪽부터 순서대로

// ex) 02984 -> 0 + 2 * 9 * 8 * 4 = 576

const test = (str) => {
  let answer = 0;
  for (let i of str) {
    if (answer === 0) {
      // answer 이 0인경우는 현재 값에 +를 해준다.
      answer += +i;
    } else {
      // answer이 양수인경우는 현재 값에 * 연산자를 해준다
      answer *= +i;
    }
  }

  console.log(answer);
};

test("567");
