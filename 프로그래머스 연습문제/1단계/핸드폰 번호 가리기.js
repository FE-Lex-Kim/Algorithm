function solution(phone_number) {
  var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

  return answer;
}

console.log(solution("027778888"));
