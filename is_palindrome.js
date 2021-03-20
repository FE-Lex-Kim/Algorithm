const is_palindrome = (str) => {
  let middleNum = Math.floor(str.length / 2);
  let afterMiddleStr = "";
  let beforeMiddleStr = "";
  for (let i = middleNum + 1; i < str.length; i++) {
    afterMiddleStr += str[i];
  }

  for (let i = 0; i < middleNum; i++) {
    beforeMiddleStr += str[i];
  }
  if (afterMiddleStr.split("").reverse().join("") === beforeMiddleStr) {
    return true;
  } else {
    return false;
  }
};

console.log(is_palindrome("racecar"));
console.log(is_palindrome("stars"));
console.log(is_palindrome("토마토"));
console.log(is_palindrome("kayak"));
console.log(is_palindrome("hello"));
