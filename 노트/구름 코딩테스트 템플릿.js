const test = (str) => {
  for (let line of str.split("\n")) {
    console.log(line);
  }
};

test(`1
2 3 4 5`);
