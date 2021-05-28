function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  console.log("people: ", people);
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (left === right) {
      answer++;
      return answer;
    }

    if (people[left] + people[right] <= limit) {
      answer++;
      left++;
      right--;
    } else {
      answer++;
      right--;
    }
  }

  return answer;
}

solution([160, 150, 140, 60, 50, 40], 200);
