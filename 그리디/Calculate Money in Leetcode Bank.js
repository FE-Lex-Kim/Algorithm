var totalMoney = function (n) {
  let answer = 0;
  for (let i = 0; i < Math.floor(n / 7); i++) {
    answer += 7 * (i + 4);
  }

  for (let i = 0; i < n % 7; i++) {
    answer += 1 + Math.floor(n / 7) + i;
  }

  return answer;
};

totalMoney(4);
/* 
After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
*/
