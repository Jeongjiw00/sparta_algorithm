// 콜라 문제
function solution(a, b, n) {
  let answer = 0;

  while (true) {
    if (a > n) {
      break;
    }
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }

  return answer;
}
