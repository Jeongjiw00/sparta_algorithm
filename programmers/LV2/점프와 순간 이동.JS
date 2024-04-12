// 점프와 순간 이동
function solution(n) {
  let answer = 1;

  while (n !== 1) {
    n = n / 2;

    // n이 짝수가 아닐 때
    if (n % 1 !== 0) {
      n = Math.floor(n);
      answer += 1;
    }
  }

  return answer;
}
