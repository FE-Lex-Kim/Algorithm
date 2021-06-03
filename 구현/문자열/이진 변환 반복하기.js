function solution(s) {
  var answer = [0, 0];
  // 1. 0을 제거하기전 0의 개수를 센다
  // 2. 0의 개수를 answer에 넣어준다.
  // 3. 0을 제거한다.
  // 4. 제거한 문자열이 1인지 확인한다.
  //    4-1 만약 1인경우 answer을 반환한다.
  // 5. 아닌경우 answer[0] 에 +1 해준다.
  // 6. 재귀함수 첫번째 인자로 이진수를 반환한채 넣어준다.
  const countAnswer = (str) => {
    if (str === "1") {
      return answer;
    }
    const length = str.length;
    str = str.replace(/0/g, "");
    answer[1] += length - str.length;
    answer[0] += 1;
    countAnswer(str.length.toString(2));
  };
  countAnswer(s);
  return answer;
}
solution("110010101001");
