function solution(n, arr1, arr2) {
  var answer = Array.from({ length: n }, () => "");
  for (let i = 0; i < arr1.length; i++) {
    let arr1V = arr1[i];
    let arr2V = arr2[i];
    let binary1 = arr1V.toString(2);
    let binary2 = arr2V.toString(2);

    if (binary1.length !== n) {
      binary1 = "0".repeat(n - binary1.length) + binary1;
    }

    if (binary2.length !== n) {
      binary2 = "0".repeat(n - binary2.length) + binary2;
    }

    arr1[i] = binary1;
    arr2[i] = binary2;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      let arr1V = arr1[i][j];
      let arr2V = arr2[i][j];

      if (arr1V === "1" || arr2V === "1") {
        answer[i] = answer[i] + "#";
      } else {
        answer[i] = answer[i] + " ";
      }
    }
  }

  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
