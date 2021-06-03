function solution(skill, skill_trees) {
  var answer = 0;
  // 1. 각각 skill 의 문자열만 남긴다
  // 2. 남은 배열을 반복하고, skill의 배열을 반복하면서 비교한다.
  // 2-1 만약 종료를 올바르게 하면 answer++
  // 2-2 만약 중간에 다르다면 종료

  for (let i = 0; i < skill_trees.length; i++) {
    const cur = skill_trees[i];
    let arr = [];
    for (let j = 0; j < cur.length; j++) {
      let skill_treesLetter = cur[j];
      for (let k = 0; k < skill.length; k++) {
        const skillLetter = skill[k];
        if (skill_treesLetter === skillLetter) {
          arr.push(skill_treesLetter);
        }
      }
    }
    skill_trees[i] = arr;
  }

  label1: for (let i = 0; i < skill_trees.length; i++) {
    let skillTree = skill_trees[i];
    for (let j = 0; j < skillTree.length; j++) {
      const skillTreeLetter = skillTree[j];
      const skillLetter = skill[j];
      if (skillTreeLetter !== skillLetter) {
        continue label1;
      }
    }
    answer++;
  }
  return answer;
}

function solution(skill, skill_trees) {
  var answer = 0;

  const reg = new RegExp(`[${skill}]`, "g");

  label1: for (const skillTree of skill_trees) {
    let arr = skillTree.match(reg);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== skill[i]) {
        continue label1;
      }
    }
    answer++;
  }

  return answer;
}

function solution(skill, skill_trees) {
  const reg = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((v) => v.replace(reg, ""))
    .filter((v) => skill.indexOf(v) === 0).length;
}
solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
