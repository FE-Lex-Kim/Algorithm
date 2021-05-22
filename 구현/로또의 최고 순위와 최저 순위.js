function solution(lottos, win_nums) {
  var answer = [];
  let curCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < lottos.length; i++) {
    let lotto = lottos[i];
    if (lotto === 0) {
      zeroCount++;
      continue;
    }
    for (let j = 0; j < win_nums.length; j++) {
      let winNum = win_nums[j];
      if (lotto === winNum) {
        curCount++;
      }
    }
  }

  switch (curCount) {
    case 6:
      answer[1] = 1;
      break;
    case 5:
      answer[1] = 2;
      break;
    case 4:
      answer[1] = 3;
      break;
    case 3:
      answer[1] = 4;
      break;
    case 2:
      answer[1] = 5;
      break;
    default:
      answer[1] = 6;
      break;
  }

  switch (curCount + zeroCount) {
    case 6:
      answer[0] = 1;
      break;
    case 5:
      answer[0] = 2;
      break;
    case 4:
      answer[0] = 3;
      break;
    case 3:
      answer[0] = 4;
      break;
    case 2:
      answer[0] = 5;
      break;
    default:
      answer[0] = 6;
      break;
  }

  return answer;
}

solution([44, 1, 2, 3, 31, 25], [44, 1, 2, 3, 31, 25]);
