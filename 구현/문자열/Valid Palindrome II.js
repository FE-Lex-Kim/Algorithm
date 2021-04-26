const validPalindrome = (s) => {
  const isTruePalindrome = (s, p1, p2) => {
    while (p1 < p2) {
      if (s[p1] !== s[p2]) {
        return false;
      }

      p1++;
      p2--;
    }

    return true;
  };
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isTruePalindrome(s, left + 1, right) ||
        isTruePalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};
console.log(validPalindrome("dbbeabdaccccadbaebbd"));
