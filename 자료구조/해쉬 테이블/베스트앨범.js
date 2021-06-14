function solution(genres, plays) {
  var answer = [];
  let map = new Map();
  let real = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    if (!map.has(genre))
      map.set(genre, { totalPlay: play, music: [[i, play]] });
    else
      map.set(genre, {
        totalPlay: map.get(genre).totalPlay + play,
        music: [...map.get(genre).music, [i, play]],
      });
  }

  map.forEach((value) => answer.push([value.totalPlay, value.music]));

  answer.sort((a, b) => b[0] - a[0]);
  answer = answer.map((v) => v[1]);

  for (const arr of answer) {
    arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));
  }

  for (const arr1 of answer) {
    real = [...real, ...arr1.slice(0, 2)];
  }

  real = real.map((v) => v[0]);

  return real;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
