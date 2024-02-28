// 숫자의 표현

// 효율성테스트 1개 실패
function solution(n) {
  let answer = 1;

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let a = i;

    while (sum < n) {
      sum += a;
      a += 1;
    }

    if (sum == n) {
      answer += 1;
    }
  }

  return answer;
}

// 신박한 풀이 - 홀수인 약수의 개수
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}
