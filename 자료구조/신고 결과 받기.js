function solution(id_list, report, k) {
  var answer = Array.from({ length: id_list.length }, () => 0);
  const reportList = new Map();

  for (let i = 0; i < report.length; i++) {
    const [doUser, getUser] = report[i].split(" ");

    if (!reportList.has(getUser)) {
      reportList.set(getUser, [doUser]);
    } else {
      reportList.set(getUser, [...reportList.get(getUser), doUser]);
    }
  }

  reportList.forEach((list, key) => {
    const setList = new Set(list);
    if (setList.size >= k) {
      setList.forEach((v, k) => {
        const index = id_list.indexOf(v);
        answer[index]++;
      });
    }
  });

  return answer;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
); //[2,1,1,0]
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3); //[0,0]
