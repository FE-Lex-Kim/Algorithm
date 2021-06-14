function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let queue = [];
  let visited = Array.from({ length: words.length }, () => false);
  // 큐에 시작노드 추가
  queue.push({ curWord: begin, length: 0 });

  while (queue.length) {
    let { curWord, length } = queue.shift();
    if (curWord === target) return length;

    // 글자가 하나 다른 단어가 인접노드가 된다.
    loop1: for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;
      const adjWord = words[i];
      let wrongCount = 0;
      for (let j = 0; j < adjWord.length; j++) {
        const adjLetter = adjWord[j];
        if (adjLetter !== curWord[j]) {
          wrongCount++;
          if (wrongCount === 2) continue loop1;
        }
      }
      // 인접 노드를 방문처리한다.
      queue.push({ curWord: adjWord, length: length + 1 });
      visited[i] = true;
    }
  }
  return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
