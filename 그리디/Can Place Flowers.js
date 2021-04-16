var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i + 1] !== 1 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i] === 0
    ) {
      count++;
      i++;
    }
  }

  return count >= n;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
