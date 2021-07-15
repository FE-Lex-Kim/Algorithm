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

/* 
총평:
1. 정규표현식에 변수를 넣는방법을 몰랐다는점
2. 정규표현식을 match로 변경된 값을 넣는것보다 replace라는 깔끔한 문법이 있다는것을 잊은점
3. 시간복잡도가 늘어났으면 어느지점에서 늘어났는지 정확히 파악하지 못한점
4. 문제자체는 로직을 떠올리는데 그리 문제는 없었지만, 해당문제에 시간복잡도를 고려해서 풀어야하는 문제
 */
