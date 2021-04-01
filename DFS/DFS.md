# DFS(Depth-First Search)

<br>

DFS는 **깊이 우선 탐색**이라고 부르며 그래프에서 **깊은 부분을 우선적으로 탐색하는 알고리즘이다.**

<br>

## 특징

- DFS는 **스택 자료구조 또는 재귀 함수를 이용한다.**
- 사용하는 경우 : 모든 노드를 방문 하고자 하는 경우에 이 방법을 선택
- 어떤 노드를 방문했는지 반드시 검사해야한다.
- 미로 게임 등에서 **경로가 존재하는지를 판별할** 때 유용하다.
- BFS 구조는 두 개의 큐를 활용하지만, DFS는 **한 개의 스택과 한 개의 큐를 사용**한다는 차이가 있다.

  → 이유 : 자기 자신과 연결되었던 노드들을 먼저 탐색하기 떄문에 stack을 사용한다.

<br>

## 동작 과정

1. 탐색 시작 노드를 스택에 넣고 방문 처리를 한다.
2. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣은후 방문 처리한다.
3. 방문하지 않은 인접노드가 없으면 스택에서 최상단 노드를 꺼낸다.
4. 2, 3번 과정을 수행할 수 없을 때까지 반복한다.

<br>

보통 방문 기준을 번호가 낮은 인접노드부터 시작한다.

<br>

## 장점

- 현재 경로상의 노드들만 기억하면 되므로 저장공간이 널널하다.
- 목표노드가 깊은 단계에 있는 경우 해를 빨리 구할 수 있다.

<br>

## 단점

- 해가 없는 경우 깊이 빠질 가능성이 있다.
- 얻어진 해가 최단 경로가 된다는 보장이 없다.

  → 목표에 이르는 경로가 다수인 문제에서 깊이 탐색은 해에 다다르면 탐색을 끝내버리므로, 이때 얻어진 해는 최적이 아닐 수 있다.

- 검색속도가 BFS에 비해서 느리다.

<br>

## DFS 알고리즘 구현

- 자료구조 스택과 큐를 활용한다.
  1. needVisit 스택과 visited 큐, 두 개의 자료구조를 생성

```jsx
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();

    // 만약 방문 하지 않은 노드라면
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);

      // 인접노드들을 탐색해야할 노드 스택에 넣어준다.
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfs(graph, "A"));

// ["A", "C", "I", "J", "H", "G", "B", "D", "F", "E"]
```

- 재귀적으로 경로를 확인하는 방법

```jsx
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = Array.from({ length: graph.length }, (_) => false);

const dfs = (graph, v, visited) => {
  visited[v] = true;
  console.log(v, " ");
  for (let i of graph[v]) {
    // 만약 방문하지 않았다면
    if (visited[i] === false) {
      dfs(graph, i, visited);
    }
  }
};

dfs(graph, 1, visited);
```

```jsx
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = Array.from({ length: graph.length }, () => false);

const dfs = (graph, startNode, visited) => {
  let needVisitedStack = [...graph[startNode]];

  visited[startNode] = true;
  console.log(`${startNode} `);

  // 방문해야할 노드가 있으면
  while (needVisitedStack.length !== 0) {
    const node = needVisitedStack.shift();

    // 만약 방문하지 않은 노드라면
    if (visited[node] === false) {
      needVisitedStack = [...graph[node], ...needVisitedStack];
      visited[node] = true;
      console.log(`${node} `);
    }
  }
};

dfs(graph, 1, visited);
```

<br>

참고

- [https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3)
- [https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html](https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html)
- [https://ko.wikipedia.org/wiki/깊이*우선*탐색](https://ko.wikipedia.org/wiki/%EA%B9%8A%EC%9D%B4_%EC%9A%B0%EC%84%A0_%ED%83%90%EC%83%89)
- [https://ryusm.tistory.com/48](https://ryusm.tistory.com/48)
