function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1 === str2) return 65536;

  const getMultiset = (str) => {
    let map = new Map();
    for (let i = 0; i < str.length - 1; i++) {
      const cur = str[i];
      const next = str[i + 1];
      const sum = cur + next;

      if (cur.charCodeAt() < 97 || 122 < cur.charCodeAt()) continue;
      if (next.charCodeAt() < 97 || 122 < next.charCodeAt()) continue;

      if (map.has(sum)) map.set(sum, map.get(sum) + 1);
      else map.set(sum, 1);
    }

    return map;
  };

  let res1 = getMultiset(str1);
  let res2 = getMultiset(str2);

  // 합집합
  const union = new Map([...res1]);

  for (const [key, value] of res2.entries()) {
    if (union.has(key)) {
      const res = Math.max(value, union.get(key));
      union.set(key, res);
    } else {
      union.set(key, value);
    }
  }
  const intersection = new Map();

  for (const [key, value] of res2.entries()) {
    if (res1.has(key)) {
      const res = Math.min(value, res1.get(key));
      intersection.set(key, res);
    }
  }

  const unionSize = [...union.values()].reduce((acc, cur) => acc + cur, 0);
  const interSize = [...intersection.values()].reduce(
    (acc, cur) => acc + cur,
    0
  );
  return Math.floor((interSize / unionSize) * 65536);
}

solution("E=M*C^2", "e=m*c^2");
