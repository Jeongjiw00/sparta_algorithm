// 주사위 게임 2
function solution(a, b, c) {
  // 모두 같을 때
  if (a === b && b === c && a === c)
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  // 2개만 같을 때
  if (a === b || b === c || a === c)
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  // 모두 다를 때
  return a + b + c;
}
