function solution(name) {
  name = name.split("");
  var answer = 0;
  // 위치 조정

  const arr1 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];

  const arr2 = [
    "A",
    "Z",
    "Y",
    "X",
    "W",
    "V",
    "U",
    "T",
    "S",
    "R",
    "Q",
    "P",
    "O",
  ];

  const countAlpha = (letter, k) => {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      const cur = arr1[i];
      if (cur === letter) {
        count = i;
      }
    }

    for (let i = 0; i < arr2.length; i++) {
      const cur = arr2[i];
      if (cur === letter) {
        count = i;
      }
    }
    if (letter === "N") {
      count = 13;
    }
    name[k] = "A";

    return count;
  };

  const checkLeft = (left) => {
    let leftCount = 1;
    while (leftCount < name.length) {
      if (name[left] !== "A") {
        return leftCount;
      }

      if (left === 0) {
        left = name.length;
        leftCount++;
      } else {
        left--;
        leftCount++;
      }
    }

    return leftCount;
  };
  const checkRight = (right) => {
    let rightCount = 1;
    while (rightCount < name.length) {
      if (name[right] !== "A") {
        return rightCount;
      }

      if (right === name.length - 1) {
        return 100;
      } else {
        right++;
        rightCount++;
      }
    }
    return rightCount;
  };

  let i = 0;

  while (true) {
    let left = i - 1 < 0 ? name.length - 1 : i - 1;
    let right = name.length - 1 < i + 1 ? name.length - 1 : i + 1;
    let cur = name[i];
    if (cur !== "A") {
      answer += countAlpha(cur, i);
    }
    if (name.every((v) => v === "A")) {
      return answer;
    }
    left = checkLeft(left);
    right = checkRight(right);

    if (right <= left) {
      let nxIdx = i + right;
      i = nxIdx;
      answer += right;
    } else {
      let nxIdx = i - left;
      if (nxIdx < 0) {
        i = nxIdx + name.length;
      } else {
        i = nxIdx;
      }
      answer += left;
    }
  }
}

console.log(solution("BABAAAAAAAAAB"));
