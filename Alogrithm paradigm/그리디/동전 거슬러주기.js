// 문제 유형: 그리디
// 돈을 거슬러 주기 위해 필요한 최소 동전개수 구하기

const min_coin_count = (value, coinList) => {
  let count = 0;
  coinList.sort((a, b) => b - a);
  for (let i = 0; i < coinList.length; i++) {
    if (value <= 0) {
      break;
    }
    let coinNum = Math.floor(value / coinList[i]);
    count += coinNum;

    value = value - coinList[i] * coinNum;
  }
  console.log(count);
};

const default_coin_list = [100, 500, 10, 50];
min_coin_count(1440, default_coin_list);
min_coin_count(1700, default_coin_list);
min_coin_count(23520, default_coin_list);
min_coin_count(32590, default_coin_list);
