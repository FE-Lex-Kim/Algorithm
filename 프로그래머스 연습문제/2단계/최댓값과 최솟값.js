function solution(s) {
  var answer = "";
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  let arr = s.match(/[^\s]+/g);
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    min = Math.min(min, +cur);
    max = Math.max(max, +cur);
  }
  answer = `${min} ${max}`;
  return answer;
}

solution("-1 -2 -3 -4");
