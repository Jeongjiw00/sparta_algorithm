// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return

function solution(a, b) {
  return Number(String(a) + String(b)) >= Number(String(b) + String(a))
    ? Number(String(a) + String(b))
    : Number(String(b) + String(a));
}
