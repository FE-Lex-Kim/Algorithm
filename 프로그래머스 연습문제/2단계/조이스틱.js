function solution(name) {
  var answer = [];
  let changeAlphabet = 0;
  name = name.split("").map((v, i) => [v, i]);
  let visited = Array.from({ length: name.length }, (_, i) => (name[i][0] === "A" ? true : false));

  let alphabet = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
  };
  function getMoveCount(str) {
    let front = alphabet[str];
    let back = 26 - alphabet[str];

    return front > back ? back : front;
  }
  function getRightCount(arr, visited, i) {
    let rightArr = [arr[i], ...arr.slice(i + 1, arr.length), ...arr.slice(0, i)];
    let rightMove = rightArr.findIndex((v, i) => {
      if (v[0] !== "A" && !visited[v[1]]) {
        return true;
      } else {
        false;
      }
    });
    if (rightMove === -1) return [0, 0];
    const rightIndex = rightArr[rightMove][1];
    return [rightMove, rightIndex];
  }

  function getLeftCount(arr, visited, i) {
    let leftArr = [arr[i], ...arr.slice(0, i).reverse(), ...arr.slice(i + 1, arr.length).reverse()];
    let leftMove = leftArr.findIndex((v, i) => {
      if (v[0] !== "A" && !visited[v[1]]) {
        return true;
      } else {
        false;
      }
    });
    if (leftMove === -1) return [0, 0];

    const leftIndex = leftArr[leftMove][1];
    return [leftMove, leftIndex];
  }

  for (let i = 0; i < name.length; i++) {
    const element = name[i][0];
    if (element !== "A") {
      changeAlphabet += getMoveCount(element);
    }
  }

  function dfs(name, visited, total, i) {
    if (visited.every((v) => v)) {
      answer.push(total);
      return;
    }

    let rightNewVisited = [...visited];
    let leftNewVisited = [...visited];

    rightNewVisited[i] = true;
    leftNewVisited[i] = true;

    let [rightMove, rightIndex] = getRightCount(name, rightNewVisited, i);
    let [leftMove, leftIndex] = getLeftCount(name, leftNewVisited, i);

    dfs(name, rightNewVisited, total + rightMove, rightIndex);
    dfs(name, leftNewVisited, total + leftMove, leftIndex);
  }

  dfs(name, visited, 0, 0);

  let res = changeAlphabet + Math.min(...answer);

  return res;
}

solution("ABAAABB");
