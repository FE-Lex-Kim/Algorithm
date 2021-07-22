function solution(s) {
  var answer = "";
  /* 
  1. 선형탐색
  2. 만약 숫자면 그대로 asnwer에 넣어줌
  3. 만약 영어면 각각 단어별로 변수 word에 저장함
  4. 저장하면서 영단어에있는 9개의 단어의 영어와 비교함
    4-1 만약 맞다면 word 초기화 하고 answer에 해당하는 숫자 넣어줌
    시간복잡도 n * 9
   */

  let word = "";
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (!isNaN(Number(cur))) {
      answer += cur;
      continue;
    }

    word += cur;
    let idx = numbers.indexOf(word);
    if (idx !== -1) {
      answer += idx;
      word = "";
      continue;
    }
  }

  return answer;
}

solution("2three45sixseven");
