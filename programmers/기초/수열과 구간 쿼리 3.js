// 수열과 구간 쿼리 3
// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.

// 구조 분해 할당
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
