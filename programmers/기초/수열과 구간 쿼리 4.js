// 수열과 구간 쿼리 4
// queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j] += 1;
      }
    }
  }

  return arr;
}
