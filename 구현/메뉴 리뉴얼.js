function solution(orders, course) {
  var answer = [];

  orders = orders.map((v) => v.split("").sort().join(""));
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  const makeMenu = (num) => {
    let map = new Map();

    for (const ele of orders) {
      const arr = ele.split("");

      const res = getCombinations(arr, num).map((v) => v.join(""));
      for (const per of res) {
        if (map.has(per)) map.set(per, map.get(per) + 1);
        else map.set(per, 1);
      }
    }

    const sortedCom = [...map]
      .sort((a, b) => b[1] - a[1])
      .reduce((acc, cur, i) => {
        if (cur[1] < 2) return acc;

        if (i === 0 || acc[0][1] === cur[1]) return [...acc, cur];

        return acc;
      }, []);

    return sortedCom.map((v) => v[0]);
  };

  for (const num of course) {
    answer.push(...makeMenu(num));
  }

  return answer.sort();
}

solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);
