var numWaterBottles = function (numBottles, numExchange) {
  let answer = numBottles;
  let emty = numBottles;
  while (numExchange <= emty) {
    let canDrink = Math.floor(emty / numExchange);
    emty = emty - canDrink * numExchange + canDrink;
    answer += canDrink;
  }

  return answer;
};

numWaterBottles(2, 3);
