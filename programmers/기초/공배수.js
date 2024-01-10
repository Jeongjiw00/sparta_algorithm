// 공배수
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
