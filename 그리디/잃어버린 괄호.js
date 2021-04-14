const test1 = (str) => {
  for (let line of str.split("\n")) {
    // str을 - 기준으로 나누어준다.
    let arr = line.split("-");
    let sum = [];

    for (let i = 0; i < arr.length; i++) {
      // temp에 각각 -으로 나누어진 배열 arr[i]에서 '+'를 기준으로 배열을 다시 만든다.
      let temp = arr[i].split("+");
      let cnt = 0;

      // temp을 반복해서 그안에 있는 요소들끼리 더해준다.
      for (let j = 0; j < temp.length; j++) {
        cnt += +temp[j];
      }

      // 각각 -으로 나누어주었던 배열의 요소들을 다 더한 값을 sum에 넣어준다.
      sum.push(cnt);
    }

    // sum의 0번째 요소를 answer에 넣어준다.
    let answer = sum[0];

    // 넣어준 answer에서 차례대로 sum의 값을 빼준다.
    for (let i = 1; i < sum.length; i++) {
      answer -= sum[i];
    }
    console.log(answer);
  }
};

test1(`55-50+40`);
