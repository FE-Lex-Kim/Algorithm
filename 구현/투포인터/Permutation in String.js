var checkInclusion = function (s1, s2) {
  let s1Fr = new Map();

  let windowFr = {};

  function isSameByComparingTwoObj(s1Fr, windowFr) {
    for (const [key, value] of s1Fr) {
      if (windowFr[key] !== value) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    const s1Element = s1[i];

    if (s1Fr.has(s1Element)) {
      s1Fr.set(s1Element, s1Fr.get(s1Element) + 1);
    } else {
      s1Fr.set(s1Element, 1);
    }
  }

  let left = 0;
  let right = 0;

  while (right < s2.length) {
    let windowSize = right - left + 1;

    if (left === 0 && right === 0) {
      windowFr[s2[right]] = 1;
    }

    if (windowSize !== s1.length) {
      right = right + 1;
      windowFr[s2[right]] = (windowFr[s2[right]] || 0) + 1;
    } else if (windowSize === s1.length) {
      if (isSameByComparingTwoObj(s1Fr, windowFr)) {
        return true;
      } else {
        windowFr[s2[left]] = windowFr[s2[left]] - 1;
        left += 1;
        right += 1;
        windowFr[s2[right]] = (windowFr[s2[right]] || 0) + 1;
      }
    }
  }

  return false;
};

checkInclusion("abc", "asjdlksadj");

```
1. The first step is to find the freq of all characters of s1.
	-> 첫 번째로 s1의 모든 문자의 빈도수를 찾는다.

2. Then we will be starting with a window of size 1 initially in s2. That means start=0, end=0.
	-> 그후, s2의 초기 값으로 윈도우 사이즈를 1부터 시작할 것이다.
	-> 코드상 의미는 start = 0, end = 0 

3. Along with this, we will also be maintaining the frequency of the characters in the current window.
	-> 그와 동시에, 현재 윈도우에서 문자들의 빈도수를 관리할 것이다.

4. We will be continuing the below steps untill we reach a situation where the end of the window reaches the end of s2. That means we will be doing the steps while end<length of s2.
	-> s2의 끝에 다다르는 상황이 올때까지 아래의 단계를 계속 할 것이다.
	-> 코드 상의 의미로 end < s2.length
		a) Increase the frequency of the character which is just now newly included inside the window. That means increase the frequency of s2[end].
			-> 윈도우에서 새롭게 포함된 문자가 있다면 빈도를 증가시킨다.
			-> 코드 상 의미로 s2[end]를 증가 시킨다.
		b) Now check if the frequency of the characters in the current window, is same as the frequency of characters int s1. But this is only possible if the length of current substring(window) is same as the length of s1. If this is true, then we can directly return true from here.
			-> 현재 윈도우 문자 빈도수와 s1의 문자의 빈도수와 같은지 체크한다.
			-> 하지만 이건 단지, 현재 윈도우의 길이와 s1의 길이가 같은지 체크하는 것이다.
			-> 만약 이 값이 같다면, 바로 true 값을 반환하면 된다.
		c) If the frequency doesnt match, we have to change the window:-
			-> 만약 윈도우와 s1의 문자 빈도수가 같지 않다면, 윈도우를 움직인다.
					i) If the length of window in less than the length of s1, then we should increase the length of the the window by increasing the end. So end+=1.
						-> 만약 윈도우의 길이가 s1의 길이보다 작다면, end를 증가시켜서 윈도우의 길이를 증가시킨다.
						-> 코드상의 의미는 end += 1
					ii) If not, that means length of window is greater than or equal to the length of s1, so we will need to move to a new window. For that we will have to move start to the next character but before that we will have to decrease the frequency of start character from the curr window frequency. That means

						-> 만약 윈도우의 길이가 s1의 길이보다 크거나 같다면,
						-> 새로운 윈도우로 움직여야한다.
						-> 다음 문자로 start를 움직인다.
						-> 그전에 미리 현재 윈도우 빈도수에서 start 문자의 빈도수를 줄여야한다.
						-> 코드 상의 의미는
								-> s2[start]의 빈도수를 감소시킨다.
								-> start을 다음 element로 이동시킨다.
								-> end를 그다음 element로 이동시킨다.
							-Decrese the frequency of s2[start].
							-Move start to the next element.
							-Move end to the next element.

5. If the algorithm did not return true for any window, then we will reach here(out of the loop). This will mean that we did not find any such substring in s2. So return false.
	-> 만약 지금까지의 모든 윈도우에서 true 를 return 하지 않았다면, 코드상 끝에 도달한다.
	-> 즉, s2에서 어떠한 substring을 발견하지 못했다는 의미로 false를 return 한다.

```;
