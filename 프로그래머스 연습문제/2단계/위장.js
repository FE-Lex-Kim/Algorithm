function solution(clothes) {
  let map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    let kind = clothes[i][1];
    if (map.get(kind)) map.set(kind, map.get(kind) + 1);
    else map.set(kind, 1 + 1);
  }
  let answer = 1;

  map.forEach((v) => (answer *= v));
  return answer - 1;
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
