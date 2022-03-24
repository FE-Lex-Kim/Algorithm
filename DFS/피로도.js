function solution(k, dungeons) {
  var answer = 0;
  let numbers = Array.from({ length: dungeons.length }, (_, i) => i);
  let permutation = [];

  function dfs(arr, total) {
    if (!arr.length) {
      permutation.push(total);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      dfs([...arr.slice(0, i), ...arr.slice(i + 1)], total + ele);
    }
  }

  dfs(numbers, "");

  for (let i = 0; i < permutation.length; i++) {
    const order = permutation[i];
    let life = k;
    let count = 0;

    for (let j = 0; j < order.length; j++) {
      const index = order[j];
      const [needs, consumption] = dungeons[index];

      if (life < needs) break;

      life = life - consumption;
      count++;
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
