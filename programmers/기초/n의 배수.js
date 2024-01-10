// n의 배수
// num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return

function solution(num, n) {
  if (num % n === 0) {
    return 1;
  }
  return 0;
}
