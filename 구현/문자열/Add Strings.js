const addStrings = (num1, num2) => {
  if (num1.length < num2.length) return addStrings(num2, num1);

  let i = num1.length - 1;
  let j = num2.length - 1;
  let answer = "";
  let carry = 0;

  while (0 <= i) {
    let digit1 = num1[i] - 0;
    let digit2 = j < 0 ? 0 : num2[j] - 0;

    let sum = carry + digit1 + digit2;
    carry = 0;
    if (sum > 9) {
      carry++;
      sum %= 10;
    }
    answer = `${sum}${answer}`;
    i--;
    j--;
  }
  if (carry > 0) answer = `${carry}${answer}`;

  return answer;
};

console.log(addStrings("11", "123"));
