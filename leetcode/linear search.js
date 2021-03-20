const linear_search = (num, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
  return null;
};
console.log(linear_search(2, [2, 3, 5, 7, 11]));
console.log(linear_search(0, [2, 3, 5, 7, 11]));
console.log(linear_search(5, [2, 3, 5, 7, 11]));
console.log(linear_search(3, [2, 3, 5, 7, 11]));
console.log(linear_search(11, [2, 3, 5, 7, 11]));

// 0
// None
// 2
// 1
// 4
