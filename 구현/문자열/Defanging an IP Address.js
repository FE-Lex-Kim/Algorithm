/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

// nice soluton to exercise algorithms
var defangIPaddr = function (address) {
  let answer = "";
  for (const str of address) {
    if (str === ".") {
      answer += "[.]";
    } else {
      answer += str;
    }
  }

  return answer;
};

console.log(defangIPaddr("1.1.1.1"));
