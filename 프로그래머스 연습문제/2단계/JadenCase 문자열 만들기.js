function solution(s) {
  // 2단계 : 스페이스 이후의 값들을 모두 소문자로
  s = s.replace(/[^\s]+/g, (v) => {
    v = v.toLowerCase();
    return v[0].toUpperCase() + v.slice(1);
  });

  return s;
}

solution("a");
// 3people Unfollowed Me
// 3people UnFollowed Me
