function solution(record) {
  var answer = [];
  /* 
  1. 각각 ID와 닉네임을 1 : 1 대응 시킨 배열을 만든다.
    1-1 만약 새로 들어온 ID가 있으면 그에대한 닉네임을 객체(idList)에 추가해준다.
  2. 닉네임이 변경되는 2가지 경우가 확인된다면
    2-1 Change로 닉네임이 변경된다면,
        2-1-1 해당 ID 키에 대한 값의 닉네임을 Change로 닉네임으로 변경한다.
    2-2 Enter가 되었다면,
        2-2-1 이때 들어온 ID값을 확인한뒤 객체(idList)에서 해당 Id값이 있는지 확인한다.
            2-2-1-1 해당 Id값이 idList에 있다면, enter에 들어온 닉네임으로 value를 변경해준다.
            2-2-1-2 만약 Id값이 idList에 없다면, idList에 key : id, value : 닉네임으로 넣어준다.

    시간 복잡도 : 
    1. 객체를 만들기위한 시간복잡도 N
    2. record에 있는 action / id / nickName 을 확인한뒤, 
        idList에서 Id에 대한 value값으로 새로운 문자열을 answer에 push하는 시간복잡도 N
    
    총 시간복잡도 : N + N = 2N
   */

  let idList = new Map();
  record = record.map((v) => v.split(" "));

  for (const [action, id, nickName] of record) {
    // 1. idList에 해당 id가 없다면 만들어준다.
    if (!idList.has(id)) {
      idList.set(id, nickName);
      continue;
    }

    // 2. 만약 있다면,
    // 2-1 change인경우 해당 idList에서 id값을 갱신해준다.

    if (action === "Change") {
      idList.set(id, nickName);
      continue;
    }

    // 2-2 Enter인경우 해당 idList에서 해당 id값이 있는지 확인한다.
    if (action === "Enter") {
      // 여기까지 조건문을 뚫고 왔다면 반드시 idList에 id가 있다.
      // 그 이유는 가장 처음에 해당 id가 없을 경우 idList에 초기값을 설정해주기 때문이다.

      // 해당 id 값을 들어온 nickName으로 갱신한다.
      idList.set(id, nickName);
      continue;
    }
  }

  // idList을 바탕으로 record를 선형탐색한다.
  for (const [action, id, nickName] of record) {
    // action과 id값을 바탕으로 문자열을 만들어 answer에 push 한다.
    let renewName = idList.get(id);

    // action이 Enter인경우
    if (action === "Enter") {
      answer.push(`${renewName}님이 들어왔습니다.`);
      continue;
    }

    if (action === "Leave") {
      answer.push(`${renewName}님이 나갔습니다.`);
      continue;
    }
  }

  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);

[
  "Prodo님이 들어왔습니다.",
  "Ryan님이 들어왔습니다.",
  "Prodo님이 나갔습니다.",
  "Prodo님이 들어왔습니다.",
];
