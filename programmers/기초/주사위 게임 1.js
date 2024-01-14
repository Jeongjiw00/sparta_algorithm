// 주사위 게임 1
// a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.

function solution(a, b) {
  if (a % 2 === 1 && b % 2 === 1) return a ** 2 + b ** 2;
  if (a % 2 === 0 && b % 2 === 0) return Math.abs(a - b);
  return 2 * (a + b);
}
