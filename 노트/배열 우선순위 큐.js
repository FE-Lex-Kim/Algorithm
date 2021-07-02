/*
    사용법
    1. 배열 형태로 우선순위 큐에 push한다.
    2. 해당 배열의 0번째 인덱스를 기준으로 오름차순으로 정렬된다.(작은 순서으로 정렬)
    3. 만약 0번째 인덱스를 기준으로 오름차순이 아니라 다른 인덱스를 기준으로 변경하고 싶으면,
        newItem[0] < element[0] 이 부분에서 0에서 원하는 인덱스로 수정하면된다.
 */
class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
    this.length = 0;
  }

  push(newItem) {
    this.length++;
    let isAdded = false;
    for (let i = 0; i < this.priorityQueue.length; i++) {
      const element = this.priorityQueue[i];
      if (newItem[0] < element[0]) {
        this.priorityQueue.splice(i, 0, newItem);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) this.priorityQueue.push(newItem);
  }

  shift() {
    this.length--;
    return this.priorityQueue.shift();
  }
}

// 내림차순 우선순위큐
class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
    this.length = 0;
  }

  push(newItem) {
    this.length++;
    let isAdded = false;
    for (let i = 0; i < this.priorityQueue.length; i++) {
      const element = this.priorityQueue[i];
      if (newItem[0] > element[0]) {
        this.priorityQueue.splice(i, 0, newItem);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) this.priorityQueue.push(newItem);
  }

  shift() {
    this.length--;
    return this.priorityQueue.shift();
  }
}

// 예제 코드
let priorityQueue = new PriorityQueue();
priorityQueue.push([13, 1]);
priorityQueue.push([3, 2]);
priorityQueue.push([4, 3]);

console.log(priorityQueue.priorityQueue);
