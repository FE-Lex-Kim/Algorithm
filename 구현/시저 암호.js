function solution(s, n) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    // 만약 공백이라면 건너 뛴다.
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    // 만약 대문자라면
    if (64 < s[i].charCodeAt() && s[i].charCodeAt() < 91) {
      console.log("UpperCase");
      if (90 < s[i].charCodeAt() + n) {
        console.log("overNumber");
        let left = s[i].charCodeAt() + n - 90;

        answer += String.fromCharCode(64 + left);
        continue;
      }
      answer += String.fromCharCode(s[i].charCodeAt() + n);
      continue;
    }

    // 만약 소문자라면
    if (122 < s[i].charCodeAt() + n) {
      console.log("LowerCase");
      let left = s[i].charCodeAt() + n - 122;

      answer += String.fromCharCode(96 + left);
      continue;
    }
    answer += String.fromCharCode(s[i].charCodeAt() + n);
  }

  console.log(answer);

  return answer;
}

solution("a B z", 4);
