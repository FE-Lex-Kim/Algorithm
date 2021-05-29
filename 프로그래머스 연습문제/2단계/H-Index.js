function solution(citations) {
  citations.sort((a, b) => a - b);
  let answer = 0;
  let length = citations.length;
  for (let i = 0; i < length; i++) {
    const cur = citations[i];
    const left = length - i;
    if (left <= cur) {
      answer = left;
      break;
    } else {
      answer = cur;
    }
  }

  return answer;
}

solution([10, 9, 4, 1, 1]);

//
//
//
//
//
//
