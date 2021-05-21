function solution(dartResult) {
  var answer = 0;
  let numArr = dartResult.match(/[0-9]+/g);
  let optionArr = dartResult.match(/[DST#*]+/g);

  for (let i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    let options = optionArr[i];

    for (let j = 0; j < optionArr.length; j++) {
      let option = options[j];
      switch (option) {
        case "S":
          numArr[i] = +numArr[i];
          break;
        case "D":
          numArr[i] = num ** 2;
          break;
        case "T":
          numArr[i] = num ** 3;
          break;
        case "*":
          numArr[i] = numArr[i] * 2;
          if (numArr[i - 1]) {
            numArr[i - 1] = numArr[i - 1] * 2;
          }
          break;
        case "#":
          numArr[i] = -numArr[i];
          break;
        default:
          break;
      }
    }
  }

  return numArr.reduce((acc, cur) => acc + cur, 0);
}

solution("1D2S#10S");
