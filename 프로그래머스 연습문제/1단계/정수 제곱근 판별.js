function solution(n) {
  var answer = 0;
  const sqrt = Math.sqrt(n);

  if (`${sqrt}`.split(".").length === 2) {
    return -1;
  }
  answer = (sqrt + 1) ** 2;

  return answer;
}

solution(121);
