/* 
카카오 코딩테스트 2단계를 계속 풀어가는 중에서 중간에 못풀어서 포기한적이 없었다.
이전에 조합에대한 알고리즘을 만들어본적있어서 구현하는데 어려움은 없었지만, 유일성과 최소성을 구현하는데 애를 먹었다.
유일성 체크는 나름 쉽게 했다. 
하지만 최소성은 2차원 배열형태인 배열 2개를 서로 비교해야한다. 
또한 로직을 진행하는 와중에 2차원 배열중 하나에 push를 해주어야 한다는점에서 로직을 만드는데 헷갈렸다.
너무 쉬운 로직인데 2차원 배열이라는 점에서 꼬아져있는 이어폰처럼 막 풀려고 할수록 더 꼬였다.

그래서 따로 1차원 배열과 1차원 배열부터 비교를 하는 함수를 만들고
2차원 배열들을 각각 선형탐색해서 1차원 배열을 비교하는 함수에 넣어 만드니 정말 눈깜짝할 사이에 풀었다.
이번에 느낀점은 꼬여있는 로직이라고 생각이들면, 
한번에 해결하려고 하지말고 컴포넌트처럼 함수를 만들어서 합쳐서 로직을 만드는 방법이 더 쉽게 풀수있다라고 배우는 좋은 기회였다고 생각이든다.

많은 알고리즘을 풀었지만,
후보키를 풀면서 로직을 더 나누어 푸는게 로직을 구성하기 쉽다는 것을 알았다는 것에 의미있는 알고리즘이라고 생각이든다.
 */
function solution(relation) {
  var answer = 0;
  let combList = [];
  let afterCheckOnly = [];
  let subKey = [];
  let arr = Array.from({ length: relation[0].length }, (_, i) => i);

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    // 재귀를 생각할때에는 마지막 부분과 그 바로 윗부분 생각해서 이어붙일지 로직을 생각하면 쉽다.
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    // 재귀의 (마지막에 반환된 값) 과 그 중간에 반환된 값이 같은 타입으로 반환되어야 한다.
    // 마지막에 반환된 값 = [[0],[1]]
    // 중간에 반환된 값 = [[1,2], [2,3]]

    return results; // 결과 담긴 results return
  };

  // 유일성 체크
  const checkOnly = (subList, relation) => {
    // subList = [1,2]
    // relation[1] + relation[2]
    // subListContent.push()

    let resOfcac = relation.map((v) => {
      // v = ["100", "ryan", "music", "2"],
      let OneLineSubListContainer = "";
      subList.forEach((id) => {
        // id = 1
        OneLineSubListContainer += v[id];
      });

      return OneLineSubListContainer;
    });
    let subListContent = new Set(resOfcac);

    return subListContent.size === relation.length;
  };

  const compareTwoArr = (arr1, arr2) => {
    for (let j = 0; j < arr2.length; j++) {
      let a2 = arr2[j];
      if (!arr1.includes(a2)) {
        return false;
      }
    }

    return true;
  };

  // 최소성 체크
  const checkMin = (afterCheckOnly, subKey) => {
    subKey = [afterCheckOnly[0]];

    loop1: for (let arr1 of afterCheckOnly) {
      for (let arr2 of subKey) {
        if (compareTwoArr(arr1, arr2)) {
          continue loop1;
        }
      }
      subKey.push(arr1);
    }

    return subKey;
  };

  for (let i = 1; i < relation[0].length + 1; i++) {
    combList.push(...getCombinations(arr, i));
  }

  for (let i = 0; i < combList.length; i++) {
    let subList = combList[i];
    if (checkOnly(combList[i], relation)) {
      afterCheckOnly.push(subList);
    }
  }

  subKey = checkMin(afterCheckOnly, subKey);

  return subKey.length;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);
