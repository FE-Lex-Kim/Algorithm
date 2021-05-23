function solution(n) {
  var answer = 0;
  let strN = `${n}`;
  let arr = [];

  for (let i = 0; i < strN.length; i++) {
    arr = [...arr, strN[i]];
  }

  answer = arr
    .sort()
    .reverse()
    .map((v) => +v)
    .join("");

  return +answer;
}
solution(118372);
