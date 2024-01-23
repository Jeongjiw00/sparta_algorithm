//특별한 이차원 배열 1
// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
function solution(n) {
  let array = Array(n).fill(Array(n).fill(0));

  return array.map((arr, index) => {
    return arr.map((a, idx) => (idx === index ? 1 : a));
  });
}
