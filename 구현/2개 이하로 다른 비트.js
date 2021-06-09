function solution(numbers) {
  let answer = [];
  // 1. 짝수인경우
  // 2. 홀수 인데 1 + 4n 인 경우
  // 3. 홀수 인데 모든값이 1인경우
  // 4. 홀수 인데 0인 요소를 발견한 경우

  loop1: for (const num of numbers) {
    // 짝수이겨나 홀수인데 1 + 4n인 경우
    if ((num - 1) % 4 === 0 || num % 2 === 0) {
      answer.push(num + 1);
    } else {
      let binary = [...num.toString(2)];
      for (let j = binary.length - 1; 0 <= j; j--) {
        // 홀수인데 중간에 0을 만난경우
        let cur = binary[j];
        if (cur === "0") {
          binary.splice(j, 2, "1", "0");
          answer.push(+parseInt(binary.join(""), 2));
          continue loop1;
        }
      }
      binary[0] = "0";
      binary.unshift("1");
      answer.push(+parseInt(binary.join(""), 2));
    }
  }
  return answer;
}

solution([19]);
console.log((39).toString(2));
console.log(parseInt("11011", 2));

// function solution(numbers) {
//   var answer = [];
//   loop1: for (const cur of numbers) {
//     let nx = cur + 1;

//     while (true) {
//       let result = (cur ^ nx).toString(2).match(/1/g).length;
//       if (result === 1 || result === 2) {
//         answer.push(nx);
//         continue loop1;
//       } else {
//         nx++;
//       }
//     }
//   }
//   console.log(answer);
// }
