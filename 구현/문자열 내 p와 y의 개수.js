function solution(s) {
  var answer = true;
  let countP = 0;
  let countY = 0;
  const upperCase = s.toUpperCase();

  for (let i = 0; i < upperCase.length; i++) {
    if (upperCase[i] === "P") {
      countP++;
    } else if (upperCase[i] === "Y") {
      countY++;
    }
  }

  if (countP !== countY) {
    answer = false;
  }

  return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
