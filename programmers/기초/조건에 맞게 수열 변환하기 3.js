// 조건에 맞게 수열 변환하기 3
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
function solution(arr, k) {
  return arr.map((num) => (k % 2 == 1 ? num * k : num + k));
}
