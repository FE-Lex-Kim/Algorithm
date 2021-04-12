function solution(x) {
  let strX = `${x}`;
  let sum = 0;
  for (let i = 0; i < strX.length; i++) {
    sum += +strX[i];
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(solution(13));
