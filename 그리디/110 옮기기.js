function solution(s) {
  var answer = [];
  /* 
  1. str에 모든 '110'을 뽑아준다.
  2. '110'는 서로 영향이 없어서 '110'을 다시 뺐다가 넣더라도 새로운 '110'이 생길수가 없다.
  3. 따라서 '110'을 모두 빼준뒤, '111'앞에 넣어준다.
  4. 만약 '111'이 없다면 가장 마지막의 0뒤에 넣어준다.
   */
  const fc = (str) => {
    str = [...str];
    let stack = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      let ele = str[i];
      if (2 < stack.length) {
        let second = stack.pop();
        let first = stack.pop();

        if (first === "1" && second === "1" && ele === "0") {
          count++;
          continue;
        }

        stack.push(first, second, ele);
        continue;
      }

      stack.push(ele);
    }

    if (count === 0) {
      answer.push(str);
      return;
    }

    const arr = [];
    while (stack.length) {
      const last = stack.pop();

      if (last === "0") {
        stack.push(last);
        break;
      }

      arr.push(last);
    }

    while (count) {
      arr.push(..."011");
      count--;
    }

    while (stack.length) {
      arr.push(stack.pop());
    }

    const result = arr.reverse().join("");
    answer.push(result);
  };

  for (const str of s) {
    fc(str);
  }

  return answer;
}

solution(["1110", "100111100", "0111111010"]);

let str = "123456";

let idx = str.indexOf("1");
let answer = str.slice(idx);
console.log(answer);
