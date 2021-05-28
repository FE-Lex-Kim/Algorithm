function solution(n) {
  // n보다 큰수들
  let i = n + 1;
  const nCount = n.toString(2).match(/1/g).length;
  while (i.toString(2).match(/1/g).length !== nCount) {
    i++;
  }

  return i;
}

solution(1000000);
