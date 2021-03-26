// 문제유형 : 문자열, 구현
// 입력값에서 알파벳을 가장먼저 알파벳순서대로 나열한뒤 입력값의 숫자들은 모두 더해 뒤에 붙여주는 프로그래밍 작성
const sortStr = (str) => {
  let num = 0;
  let sortStr = "";

  for (let i of str) {
    if (isNaN(+i)) {
      sortStr += i;
    } else {
      num += +i;
    }
  }
  sortStr = sortStr.split("").sort().join("");

  console.log(sortStr + num);
};

sortStr("AJKDLSI412K4JSJ9D");
