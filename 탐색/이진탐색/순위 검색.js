function solution(info, query) {
  const answer = [];
  const infoMap = {};

  function combination(arr, score, start) {
    const key = arr.join("");
    const value = infoMap[key];

    if (value) {
      infoMap[key].push(score);
    } else {
      infoMap[key] = [score];
    }

    for (let i = start; i < arr.length; i++) {
      const temp = [...arr];
      temp[i] = "-";
      combination(temp, score, i + 1);
    }
  }

  for (const e of info) {
    const splited = e.split(" ");
    const score = +splited.pop();
    combination(splited, score, 0);
  }

  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (const e of query) {
    const splited = e.replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const key = splited.join("");
    const array = infoMap[key];

    if (array) {
      let start = 0;
      let end = array.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (score <= array[mid]) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }
      const res = array.length - start;
      answer.push(res);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

function failTimecomplex(info, query) {
  let answer = [];
  const intersection = (arr1, arr2) => {
    let res = [];
    for (const num of arr1) {
      if (!arr2.includes(num)) continue;
      res.push(num);
    }

    return res;
  };

  let map = {
    cpp: [],
    java: [],
    python: [],
    backend: [],
    frontend: [],
    junior: [],
    senior: [],
    chicken: [],
    pizza: [],
    score: [],
  };

  // 1. info 배열로 정리
  info = info.map((v) => v.split(" "));

  // 2. info map에 각각 카테고리별로 할당
  for (let i = 0; i < info.length; i++) {
    const [lang, job, career, food, score] = info[i];
    map[lang].push(i);
    map[job].push(i);
    map[career].push(i);
    map[food].push(i);
    map.score.push(+score);
  }

  // 3. query 배열 형태로 변환
  query = query.map((v) => v.split(" ").filter((v) => v !== "and"));

  // 4. query를 선형탐색,
  loop1: for (const condi of query) {
    let res = null;
    for (let i = 0; i < condi.length - 1; i++) {
      //   4-1. 각각의 카테고리별로 인덱스를 가져옴
      const category = condi[i];
      if (category === "-") continue;
      if (res === null) {
        res = map[category];
        continue;
      }

      if (!res.length) {
        answer.push(0);
        continue loop1;
      }

      //   4-2. 각각의 카데고리들과 인덱스 교집합을 구함
      res = intersection(res, map[category]);
    }

    const condiScore = +condi[condi.length - 1];
    let count = 0;

    if (res === null) {
      count = map.score.filter((v) => condiScore <= v).length;
      answer.push(count);
      continue;
    }

    // 1. res안에 있는 인덱스 중에서 map.score안에 해당 인덱스에 해당 하는 값이 condiSocre보다 크거나 같은 값을 반환한다.
    for (const id of res) {
      const resScore = map.score[id];
      if (condiScore <= resScore) count++;
    }
    answer.push(count);
  }

  return answer;
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
