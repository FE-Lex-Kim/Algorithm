var minOperations = function (s) {
  let start1 = "";
  let start0 = "";
  let count0 = 0;
  let count1 = 0;

  // start1 만들기
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      start1 += 1;
    } else {
      start1 += 0;
    }

    if (i % 2 === 0) {
      start0 += 0;
    } else {
      start0 += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (start0[i] !== s[i]) {
      count0++;
    }

    if (start1[i] !== s[i]) {
      count1++;
    }
  }

  return Math.min(count0, count1);
};

minOperations("101101111");
