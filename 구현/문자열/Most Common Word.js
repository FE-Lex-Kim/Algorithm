/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let regExp = /[a-z]+/g;

  return Object.entries(
    paragraph
      .toLowerCase()
      .match(regExp)
      .filter((v) => {
        for (let i = 0; i < banned.length; i++) {
          if (v === banned[i]) {
            return false;
          }
        }
        return true;
      })
      .reduce(
        (acc, cur) =>
          acc[cur] === undefined
            ? { ...acc, [cur]: 1 }
            : { ...acc, [cur]: acc[cur] + 1 },
        {}
      )
  ).sort((a, b) => b[1] - a[1])[0][0];
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
