// 카펫
// 근의 공식
// 노란 width = x, 노란 height = y로 생각 했을 때
// x * y = yellow, (x+2) * (y+2) = yellow + brown

function solution(brown, yellow) {
  const x =
    ((brown - 4) / 2 + Math.sqrt(Math.pow((brown - 4) / 2, 2) - 4 * yellow)) /
    2;
  const y = yellow / x;

  return [Math.max(x + 2, y + 2), Math.min(x + 2, y + 2)];
}
