function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 1) {
        answer += arr[i][j].toLowerCase();
        continue;
      }
      answer += arr[i][j].toUpperCase();
    }
    if (i === arr.length - 1) continue;
    answer += " ";
  }
  return answer;
}

solution("try hello world");
