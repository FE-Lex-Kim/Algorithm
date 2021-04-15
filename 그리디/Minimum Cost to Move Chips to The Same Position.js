var minCostToMoveChips = function (position) {
  let arrSet = [...new Set(position)];
  let answerArr = [];

  for (let i = 0; i < arrSet.length; i++) {
    let count = 0;
    for (let j = 0; j < position.length; j++) {
      if (Math.abs(arrSet[i] - position[j]) % 2 === 1) {
        count++;
      }
    }
    answerArr.push(count);
  }
  return Math.min(...answerArr);
};

minCostToMoveChips([1, 1000000000]);
