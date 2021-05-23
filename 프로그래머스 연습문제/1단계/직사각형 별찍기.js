function solution(a, b) {
  let answer = "";
  for (let i = 0; i < b; i++) {
    answer += "*".repeat(a);
    answer += "\n";
  }
  console.log(answer);
}

solution(5, 3);
