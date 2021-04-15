var maximumUnits = function (boxTypes, truckSize) {
  let answer = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < boxTypes.length; i++) {
    if (boxTypes[i][0] < truckSize) {
      answer += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else if (0 === truckSize - boxTypes[i][0]) {
      answer += boxTypes[i][0] * boxTypes[i][1];
      break;
    } else if (truckSize - boxTypes[i][0] < 0) {
      answer += truckSize * boxTypes[i][1];
      break;
    }
  }
  console.log(answer);
  return answer;
};

// nice solution
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let units = 0;
  let currentBoxNum = 0;

  for (const [boxes, boxUnits] of boxTypes) {
    if (truckSize === 0) return units;
    const boxesToPlace = Math.min(truckSize, boxes);
    truckSize -= boxesToPlace;
    units += boxesToPlace * boxUnits;
  }

  return units;
};

maximumUnits(
  [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  10
);
