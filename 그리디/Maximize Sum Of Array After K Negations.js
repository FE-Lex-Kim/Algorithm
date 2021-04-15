var largestSumAfterKNegations = function (A, K) {
  let negativeNum = 0;
  A.sort((a, b) => a - b);

  // count negative number
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      negativeNum++;
    }
  }

  // change all negative number to positive number
  if (0 < negativeNum) {
    for (let i = 0; i < A.length; i++) {
      if (K === 0) {
        break;
      }
      if (A[i] < 0) {
        A[i] = Math.abs(A[i]);
        K--;
      }
    }
  }

  // even
  if (K % 2 === 0) {
    return A.reduce((acc, cur) => acc + cur, 0);
  } else {
    // odd
    A[A.indexOf(Math.min(...A))] += A[A.indexOf(Math.min(...A))] * -2;
  }

  return A.reduce((acc, cur) => acc + cur, 0);
};

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
largestSumAfterKNegations([2, -3, -1, 5, -4], 2); // 5
