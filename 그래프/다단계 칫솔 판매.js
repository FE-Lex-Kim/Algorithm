function solution(enroll, referral, seller, amount) {
  var answer = Array.from({ length: enroll.length }, () => 0);
  /* 
  1. answer을 enroll의 길이만큼 0을 넣어준다.
  2. young의 이익금에서 10%를 제외한 값을 young의 인덱스위치에 더해준다.(1200 - 120)
        이익금이 10보다 작은값이라면 자신의 금액에 넣고 끝낸다.
  3. young의 이익금 10%를 자신의 부모에게 그대로 전달해준다.(120)
  4. young의 부모 노드는 edward이므로 120이익금을 바탕으로 2,3번 과정을 똑같이해준다.
  5. 만약 자신의 부모노드가 없다면('-')이라면 2번과정만 하고 3번과정은 제외해준다.
  6. 이후 다음 seller 과정을 한다.

  ** 소수점 나오면 Math.floor로 소수점 다 버려주고 정수값만 고려해준다.
   */
  const recursive = (sellerName, sellerAmount) => {
    let idx = enroll.indexOf(sellerName);

    if (sellerAmount < 10) {
      // 10원이하라면 더이상 10퍼센트를 해도 일의자리수라 자신이 가지고 끝낸다.
      answer[idx] += sellerAmount;
      return;
    }

    let left = Math.floor(sellerAmount / 10); // 부모에게 주어야할 금액
    let afterTax = sellerAmount - left; // 본인이 소유할 금액

    answer[idx] += afterTax; // 자신의 통장에 넣어줌

    let parent = referral[idx]; // 자신의 부모이름

    if (parent === "-") return; // 자신의 부모가 '-'이라면 3번과정 종료

    recursive(parent, left); // 자신의 부모도 마찬가지로 2,3번과정을 반복한다.
  };

  for (let i = 0; i < seller.length; i++) {
    const sellerName = seller[i];
    const sellerAmount = amount[i] * 100;
    recursive(sellerName, sellerAmount);
  }

  return answer;
}

solution(
  ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
  ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
  ["young", "john", "tod", "emily", "mary"],
  [12, 4, 2, 5, 10]
);
