# BFS(Breadth-First Search)

<br>

BFS는 너비 우선 탐색이라고 부르며, 그래프에서 가까운 노드부터 우선적으로 탐색하는 알고리즘 이다.

<br>

## 특징

- 시작노드와 가까운 노드들을 찾기 때문에 **최단거리를 탐색**할때 유용하다.
- 큐 자료구조에 각 노드의 정보를 기록해야 하기 때문에 메모리를 많이 잡는다.
- 찾고자 하는 목표노드가 시작노드와 가까이 있다고 예상되면 BFS를 사용한다.
- 지도 어플에서 특정 위치까지 최단거리 안내, 소셜미디어에서 친구 추천 등에 이용된다.

<br>

## 동작과정

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리한다.
2. 큐에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리한다.
3. 더 이상 2번의 과정을 수행할 수 없을 때까지 반복한다.

<br>

## 장점

1. 너비를 우선으로 탐색하여 답이 되는 경로가 여러개 일때에도 최단경로임을 보장해준다.
2. 최단경로가 존재한다면, 어느 한 경로가 무한히 깊어지더라도 반드시 최단경로를 찾아준다.
3. 노드의 수가 적고 깊이가 얕은 해가 존재할때 유리하다.

<br>

## 단점

1. 재귀호출을 사용하는 DFS와 다르게 큐를 이용해 탐색할 노드를을 저장하기 때문에 노드의 수가 많을수록 필요없는 노드들까지 저장하여 더 큰 공간이 필요하다.
2. 노드의 수가 늘어나면 탐색해야하는 노드 또한 많아지기 때문에 비현실적이다.

<br>

## 알고리즘 구현

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

const bfs = (graph, startNode) => {
  let visitedQueue = []; // 탐색을 마친 노드
  let needvisitQueue = []; // 탐색을 해야할 노드

  needvisitQueue = [startNode]; // 노드 탐색 시작

  while (needvisitQueue.length !== 0) {
    // 탐색해야할 노드가 있다면
    const node = needvisitQueue.shift();
    if (!visitedQueue.includes(node)) {
      // 해당 노드가 방문한 적이 없다면
      visitedQueue = [...visitedQueue, node];
      needvisitQueue = [...needvisitQueue, ...graph[node]];
    }
  }
  return visitedQueue;
};

bfs(graph, "A");
console.log('bfs(graph, "A");: ', bfs(graph, "A"));
```

<br>

## 시간복잡도

<br>

### BFS 노드 전처리

먼저 모든 노드를 방문하지 않은 노드로 표시하는데 V의 시간이 걸린다.

visited변수를 False로 만들어야 한다.

<br>

노드들 전처리는 O(V)가 걸린다.

<br>

### 큐에 노드를 넣고 빼는 데 걸리는 시간

BFS는 방문한 노드를 표시하고 다시 방문하지 않는다.

따라서 큐에 들어가고 나오는 총 시간은 V(O)이다.

<br>

### 큐에서 뺀 노드의 인전합 노드들을 도는데 걸리는 시간

큐에서 노드를 꺼내고, 그 노드에 인접한 다른 노드들을 도는데 걸리는 시간을 계산해보면

<br>

모든 노드들의 인접 리스트를 딱 한번 돈다. 따라서 총 엣지 수가 E이므로 총 E에 비례하는 만큼 실행 된다고 할 수 있다.

<br>

O(E) 가 걸린다.

<br>

### 정리

<br>

전처리: O(V)

큐에서 노드 넣고 빼기 : O(V)

인접한 노드들을 도는데 걸리는 시간 : O(E)

<br>

총 더하면 O(2V + E), 앞의 2는 제외한 총O(V + E)의 시간 복잡도가 걸린다.

<br>

참고

- [https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3)
- 코드잇 인강
- [https://ryusm.tistory.com/48](https://ryusm.tistory.com/48)
- [https://hyeooona825.tistory.com/46](https://hyeooona825.tistory.com/46)
