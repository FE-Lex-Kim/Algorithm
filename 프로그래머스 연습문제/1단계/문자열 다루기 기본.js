function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(+s[i]) || s[i] === " ") {
      return false;
    }
  }

  return true;
}

solution("12 4");
