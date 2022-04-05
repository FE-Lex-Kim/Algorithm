function solution(m, musicinfos) {
  musicinfos = musicinfos.map((v) => v.split(","));
  var answer = [-1, 0, 0];

  function timeToMin(str1, str2) {
    const [hours1, mins1] = str1.split(":");
    const [hours2, mins2] = str2.split(":");

    const totalMin1 = Number(hours1) * 60 + Number(mins1);
    const totalMin2 = Number(hours2) * 60 + Number(mins2);

    return totalMin2 - totalMin1;
  }

  function oneLineLyrics(lyric, mins) {
    const realTimeForLyric = lyric.replace(/#/g, "").length;
    const longLine = lyric.repeat(Math.floor(mins / realTimeForLyric));

    let leftTime = mins % realTimeForLyric;
    let leftLine = "";

    for (let i = 0; i < lyric.length; i++) {
      const cur = lyric[i];
      const next = lyric[i + 1];

      leftLine += cur;
      if (next === "#") {
        leftLine += next;
        i++;
      }

      leftTime--;
      if (leftTime === 0) {
        break;
      }
    }

    return longLine + leftLine;
  }

  function checkAnswer(origin, lyrics) {
    for (let i = 0; i < lyrics.length; i++) {
      const cur = lyrics.slice(i, i + origin.length);

      if (cur === origin && lyrics[i + origin.length] !== "#") {
        return true;
      }
    }

    return false;
  }

  for (let i = 0; i < musicinfos.length; i++) {
    const [startTime, endTime, name, lyrics] = musicinfos[i];
    const totalMin = timeToMin(startTime, endTime);
    const oneLineLyric = oneLineLyrics(lyrics, totalMin);

    if (checkAnswer(m, oneLineLyric)) {
      if (answer[0] < totalMin) {
        answer = [totalMin, i, name];
      } else if (answer[0] === totalMin) {
        if (answer[1] > i) {
          answer = [totalMin, i, name];
        }
      }
    }
  }

  if (answer[0] === -1) {
    return "(None)";
  }

  return answer[2];
}

console.log(solution("cdcdf", ["00:00,23:59,TEST,cdcdcdf#"]));
