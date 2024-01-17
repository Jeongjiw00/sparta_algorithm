// 콜라츠 수열 만들기
// 모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고,
// x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제
function solution(n) {
  const result = [];

  while (n !== 1) {
    result.push(n);
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
  }

  result.push(1);

  return result;
}
