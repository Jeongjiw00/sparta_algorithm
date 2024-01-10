// 홀짝에 따라 다른 값 반환하기
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return

function solution(n) {
  let answer = 0;

  if (n % 2 === 0) {
    for (let i = 2; i <= n; i = i + 2) {
      answer += i ** 2;
    }
  } else {
    for (let i = 1; i <= n; i = i + 2) {
      answer += i;
    }
  }

  return answer;
}
