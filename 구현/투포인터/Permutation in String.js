var checkInclusion = function (s1, s2) {
  let s1Fr = new Map();

  let windowFr = {};

  function isSameByComparingTwoObj(s1Fr, windowFr) {
    for (const [key, value] of s1Fr) {
      if (windowFr[key] !== value) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    const s1Element = s1[i];

    if (s1Fr.has(s1Element)) {
      s1Fr.set(s1Element, s1Fr.get(s1Element) + 1);
    } else {
      s1Fr.set(s1Element, 1);
    }
  }

  let left = 0;
  let right = 0;

  while (right < s2.length) {
    let windowSize = right - left + 1;

    if (left === 0 && right === 0) {
      windowFr[s2[right]] = 1;
    }

    if (windowSize !== s1.length) {
      right = right + 1;
      windowFr[s2[right]] = (windowFr[s2[right]] || 0) + 1;
    } else if (windowSize === s1.length) {
      if (isSameByComparingTwoObj(s1Fr, windowFr)) {
        return true;
      } else {
        windowFr[s2[left]] = windowFr[s2[left]] - 1;
        left += 1;
        right += 1;
        windowFr[s2[right]] = (windowFr[s2[right]] || 0) + 1;
      }
    }
  }

  return false;
};

checkInclusion("abc", "asjdlksadj");
