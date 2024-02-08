// 소수 찾기
function solution(n) {
  const set = new Set();
  for (let i = 2; i <= n; i++) {
    set.add(i);
  }

  for (let j = 2; j < Math.sqrt(n); j++) {
    if (set.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        set.delete(k);
      }
    }
  }
  return set.size;
}
