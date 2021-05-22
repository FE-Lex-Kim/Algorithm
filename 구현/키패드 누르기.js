function solution(numbers, hand) {
  var answer = "";
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let left = [3, 0];
  let right = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    const cur = numbers[i];
    let x;
    let y;

    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[0].length; k++) {
        const v = arr[j][k];
        if (cur === v) {
          x = j;
          y = k;
        }
      }
    }

    if (cur === 1 || cur === 4 || cur === 7) {
      answer += "L";
      left = [x, y];
    } else if (cur === 3 || cur === 6 || cur === 9) {
      answer += "R";
      right = [x, y];
    } else {
      let leftDistance = Math.abs(left[0] - x) + Math.abs(left[1] - y);
      let rightDistance = Math.abs(right[0] - x) + Math.abs(right[1] - y);

      if (leftDistance === rightDistance) {
        if (hand === "right") {
          answer += "R";
          right = [x, y];
        } else {
          answer += "L";
          left = [x, y];
        }
      } else if (leftDistance < rightDistance) {
        answer += "L";
        left = [x, y];
      } else {
        answer += "R";
        right = [x, y];
      }
    }
  }
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
