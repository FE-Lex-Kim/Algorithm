/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const group = (word) => {
    let str = "";
    let count = 0;
    let arr = [];
    for (let i = 0; i < word.length; i++) {
      count++;
      if (word[i] !== word[i + 1]) {
        str += word[i];
        arr.push([str, count]);
        count = 0;
        str = "";
      }
    }
    return arr;
  };
  let arr1 = group(name);
  let arr2 = group(typed);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] !== arr2[i][0]) {
      return false;
    }

    if (arr2[i][1] < arr1[i][1]) {
      return false;
    }
  }

  return true;
};

// nice solution
var isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;

  while (j < typed.length) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else if (typed[j] === typed[j - 1]) {
      j++;
    } else {
      break;
    }
  }

  return i === name.length && j === typed.length;
};

console.log(isLongPressedName("alex", "aaleexa"));
