/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let balls = [];
  let answer = Array.from({ length: boxes.length }, () => 0);
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === "1") {
      balls.push(i);
    }
  }

  for (const ballIdx of balls) {
    for (let i = 0; i < boxes.length; i++) {
      answer[i] += Math.abs(ballIdx - i);
    }
  }

  return answer;
};

var minOperations = function (boxes) {
  var leftArr = Array(boxes.length).fill(0);
  var rightArr = Array(boxes.length).fill(0);
  var ones = +boxes[0];
  for (var i = 1; i < boxes.length; i++) {
    leftArr[i] = leftArr[i - 1] + ones;
    if (boxes[i] === "1") {
      ones++;
    }
  }
  ones = +boxes[boxes.length - 1];
  for (var i = boxes.length - 2; i > -1; i--) {
    rightArr[i] = rightArr[i + 1] + ones;
    if (boxes[i] === "1") {
      ones++;
    }
  }
  return leftArr.map((item, i) => item + rightArr[i]);
};

minOperations("001011");
