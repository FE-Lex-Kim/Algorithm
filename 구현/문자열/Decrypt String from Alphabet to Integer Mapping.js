var freqAlphabets = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      arr.push(String.fromCharCode(+(s[i] + s[i + 1]) + 96));
      i = i + 2;
    } else {
      arr.push(String.fromCharCode(+s[i] + 96));
    }
  }

  return arr.join("");
};

freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#");
