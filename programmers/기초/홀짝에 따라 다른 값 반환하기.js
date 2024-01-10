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

// 반복문 사용 X
function solution2(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2); // 등차수열 합 공식
  else return (n * (n + 1) * (n + 2)) / 6; // 등차수열 제곱 합 공식
}
