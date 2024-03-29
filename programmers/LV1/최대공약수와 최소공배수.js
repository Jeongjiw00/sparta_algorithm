// 최대공약수와 최소공배수
function solution(n, m) {
  let gcd;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }

  return [gcd, (n * m) / gcd];
}
