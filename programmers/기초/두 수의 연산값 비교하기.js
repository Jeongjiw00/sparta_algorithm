// 두 수의 연산값 비교하기
// a ⊕ b와 2 * a * b 중 더 큰 값을 return
// 예) 12 ⊕ 3 = 123 ,3 ⊕ 12 = 312

function solution(a, b) {
  let result = 2 * a * b;
  if (Number(String(a) + String(b)) > result) {
    return Number(String(a) + String(b));
  }
  return result;
}
