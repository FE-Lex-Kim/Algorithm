const max_product = (arr) => {
  let maxNum = 1;

  for (let i = 0; i < arr.length; i++) {
    let curNum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (curNum < arr[i][j]) {
        curNum = arr[i][j];
      }
    }
    maxNum *= curNum;
  }
  console.log(maxNum);
};

test_cards = [
  [9, 7, 8],
  [9, 2, 3],
  [9, 8, 1],
  [2, 8, 3],
  [1, 3, 6],
  [7, 7, 4],
];
max_product(test_cards);
