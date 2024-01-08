// 유한소수가 되기 위한 분수의 조건 - 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return

function solution(numer, denom) {
  // 분모와 분자의 최대공약수
  const getGCD = (denom, numer) =>
    numer > 0 ? getGCD(numer, denom % numer) : denom;

  let gcd = getGCD(denom, numer);
  denom = denom / gcd;
  numer = numer / gcd;

  // 분모의 소인수
  for (let i = 2; i <= denom; i++) {
    while (denom % i === 0) {
      denom = denom / i;
      if (i !== 2 && i !== 5) {
        return 2;
      }
    }
  }
  return 1;
}

console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
