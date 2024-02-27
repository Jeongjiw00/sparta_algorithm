// 귤 고르기
function solution(k, tangerine) {
  const time = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    const a = time.get(tangerine[i]);
    time.set(tangerine[i], a ? a + 1 : 1);
  }

  const array = Array.from(time.values()).sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (k <= 0) break;

    k -= array[i];
    count++;
  }

  return count;
}
