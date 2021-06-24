/* 
다이나믹 프로그래밍으로 풀어야한다.
어떻게 이렇게 접근했는지는 모르겠지만 dp[0]은 첫번째 스티커를 뜯었을때 최댓값이고 
이전 dp[i-1]이 크거나 또는 dp[i-2] + dp[i] 둘중 큰 값을 dp[i] 값으로 한다.

현재값을 뜯지 않을때 최댓값과 현재 값을 뜯었을때 최댓값중 큰값을 비교해서 dp[i]에 넣어준다.
뜯지 않았을때 최댓값은 dp[i-1](이전 dp값)이 되고
현재 값을 뜯었을때 최댓값은 dp[i-2] + sticker[i](이전전dp 값 + 현재값) 값이 된다.
** dp값이란 i번째의 뜯었을때 최댓값

그리고 원형 모양의 스티커이다 보니 두가지 dp경우가 나온다.

첫번째 dp경우는 첫번째 스티커를 뜯었을때이다.
이때 가장 초기값은(dp[0]), 첫번째 스티커인 sticker[0]의 값이 된다.
그 이유는 첫번째 값을 뜯었을때, 이전전 값을 뜯었을때와 현재값을 뜯었을때가 가장 최댓값인데
이전전 값이 없이 가장 첫번째로 뜯었다보니 0 + 현재값이다.

따라서 첫번째 스티커를 뜯었으니 마지막 스티커는 뜯으면 안되기 떄문에 sticker.length - 2까지 반복문을 돌아야한다.

두번째 dp경우는 첫번째 스티커를 안뜯었을때이다.
이때 가장 초기값(dp[0])은, 첫번째 스티커를 안뜯은 0값이 된다.
그 이유는 첫번째 값을 안뜯었다보니, 이때 최댓값은 이전 최댓값이 여야하는데 
이전 최댓값이 없으므로(0이므로), 0값이다.
*/
function solution(sticker) {
  if (sticker.length === 1) return sticker[0];
  var answer = 0;
  // dp1은 첫번째 스티커를 뜯었을때
  let dp1 = [];
  dp1[0] = sticker[0];
  dp1[1] = dp1[0];

  for (let i = 2; i < sticker.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }

  // dp2는 첫번째 스티커를 안뜯었을때
  let dp2 = [];
  dp2[0] = 0;
  dp2[1] = sticker[1];

  for (let i = 2; i < sticker.length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  answer = Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);

  console.log(answer);
  return answer;
}

solution([14]);
