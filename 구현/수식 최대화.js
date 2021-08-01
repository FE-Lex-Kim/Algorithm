function solution(expression) {
  var answer = 0;

  /*
  우선순위 연산자 구하기
  1. expression을 각각 배열의 요소로 만드는 과정에서 연산자가 어떤것이 있는지 확인한다.
  2. 이후 해당 연산자들을 바탕으로 연산자 우헌순위 배열을 만든다.

  우선순위 연산자를 사용하여 결과값 만들기
  1. 모든 연산자와 숫자를 배열에서 요소로 나누어준다.
  2. 선형 탐색하면서 각각 우선순위 연산자별로 계산을 해준다.
   */
  const add = (a, b) => {
    return a + b;
  };

  const sub = (a, b) => {
    return a - b;
  };

  const multi = (a, b) => {
    return a * b;
  };
  // 1. expression 나누고, 연산자 구하기
  let operators = new Set();
  let split = [];
  let result = "";
  for (const letter of expression) {
    if (letter === "+" || letter === "-" || letter === "*") {
      split.push(result);
      result = "";
      split.push(letter);
      operators.add(letter);
      continue;
    }

    result += letter;
  }

  split.push(result);

  // 2. 우선순위 연산자 경우의 수 구하기
  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  const route = getPermutations([...operators], operators.size);

  for (const opers of route) {
    let copy = [...split];
    for (const oper of opers) {
      while (true) {
        const index = copy.indexOf(oper);
        let result = 0;
        if (index === -1) {
          break;
        }
        const prev = +copy[index - 1];
        const next = +copy[index + 1];
        if (oper === "+") {
          result += add(prev, next);
        } else if (oper === "-") {
          result += sub(prev, next);
        } else {
          result += multi(prev, next);
        }

        copy.splice(index - 1, 3, result);
      }
    }
    answer = Math.max(answer, Math.abs(copy[0]));
  }
  return answer;
}

solution("1*1*1*1");
