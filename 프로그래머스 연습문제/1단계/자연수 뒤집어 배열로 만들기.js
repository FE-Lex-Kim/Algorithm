function solution(n) {
  var answer = [];
  const strN = `${n}`;
  for (let i = 0; i < strN.length; i++) {
    answer = [...answer, strN[i].split("")];
  }
  answer = answer.map((v) => +v).reverse();

  return answer;
}

solution(12345);
