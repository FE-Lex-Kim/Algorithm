function solution(N, stages) {
  var answer = [];
  let headcount = stages.length;
  let stayStage = Array.from({ length: N }, () => 0);

  for (let i = 0; i < stages.length; i++) {
    let cur = stages[i];
    if (cur === N + 1) {
      continue;
    }
    stayStage[cur - 1] += 1;
  }

  for (let i = 0; i < stayStage.length; i++) {
    let cur = stayStage[i];
    let fail = cur / headcount;
    if (headcount === 0) {
      stayStage[i] = { i, fail: 0 };
    } else {
      stayStage[i] = { i, fail };
    }

    headcount -= cur;
  }

  stayStage.sort((a, b) =>
    a["fail"] === b["fail"] ? a["i"] - b["i"] : b["fail"] - a["fail"]
  );

  stayStage = stayStage.map((v) => v["i"] + 1);

  return stayStage;
}

solution(4, [4, 4, 4, 4, 4]);
