// 문자열 나누기
function solution(s) {
  let answer = 0;
  let count = 1;
  let index = 1;

  s = s.split("");

  while (s.length) {
    let first = s[0];

    if (first === s[index]) {
      count++;
    } else {
      count--;
    }

    if (count !== 0) {
      index++;
    } else {
      answer++;
      s.splice(0, index + 1);
      index = 1;
      count = 1;
    }
  }

  return answer;
}
