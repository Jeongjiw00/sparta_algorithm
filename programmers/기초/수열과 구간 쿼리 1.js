//수열과 구간 쿼리 1
//각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
function solution(arr, queries) {
  queries.map((x) => {
    for (i = x[0]; i <= x[1]; i++) {
      arr[i]++;
    }
  });
  return arr;
}
//reduce
function solution2(arr, queries) {
  return queries.reduce((acc, cur) => {
    const [from, to] = cur;
    for (let i = from; i <= to; i++) {
      acc[i] += 1;
    }
    return acc;
  }, arr);
}
