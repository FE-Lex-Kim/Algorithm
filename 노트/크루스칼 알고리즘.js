// 크루스칼 알고리즘
var solution = (n, arr) => {
  arr.sort((a, b) => a[2] - b[2]);
  let parent = [];

  let nodeList = [];

  // 노드 값 찾기
  for (const [a, b] of arr) {
    nodeList[a] = a;
    nodeList[b] = b;
  }

  // 부모를 자기 자신으로 초기화
  for (let i = 0; i < n; i++) {
    parent[nodeList[i]] = nodeList[i];
  }

  const findParent = (parent, x) => {
    if (parent[x] !== x) {
      parent[x] = findParent(parent, parent[x]);
    }

    return parent[x];
  };

  const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);

    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  };

  let result = 0;
  for (const [a, b, cost] of arr) {
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);

      result += cost;
    }
  }

  return result;
};

solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]);
