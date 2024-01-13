// 수열과 구간 쿼리 2
// queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

function solution(arr, queries) {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    // 범위잘라주기
    const array1 = arr.slice(s, e + 1);
    // k보다 큰 값 찾기
    const array2 = array1.filter((num) => num > k);

    // 존재안하면 -1 return
    if (array2.length === 0) {
      result.push(-1);
    } else {
      // 가장 작은 값 찾기
      const min = Math.min(...array2);
      result.push(min);
    }
  }

  return result;
}
