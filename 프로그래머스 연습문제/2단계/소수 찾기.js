function solution(numbers) {
  let answer = 0;
  numbers = numbers.split("").map((v) => +v);
  let arr = [];

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

  const isPrime = (n) => {
    let count = 0;

    if (n === 1 || n === 0) return false;
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 1; i <= numbers.length; i++) {
    arr.push(
      getPermutations(numbers, i).map((v) => {
        return v.join("");
      })
    );
  }

  arr = arr.flat().map((v) => +v);

  let set = new Set(arr);
  arr = [...set];
  console.log("arr: ", arr);

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (isPrime(cur)) {
      answer++;
    }
  }

  return answer;
}
solution("011");
