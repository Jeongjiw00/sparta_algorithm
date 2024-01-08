// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return

function solution(numer1, denom1, numer2, denom2) {
  // 분모
  let denom = denom1 * denom2;

  // 분자
  let numer = numer1 * denom2 + numer2 * denom1;

  // 분모와 분자의 최대공약수
  const getGCD = (denom, numer) =>
    numer > 0 ? getGCD(numer, denom % numer) : denom;

  let gcd = getGCD(denom, numer);
  denom = denom / gcd;
  numer = numer / gcd;

  return [numer, denom];
}

console.log(solution(1, 2, 3, 4));
console.log(solution(2, 8, 2, 8));
