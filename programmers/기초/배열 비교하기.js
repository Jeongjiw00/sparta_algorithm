// 배열 비교하기
// arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return
function solution(arr1, arr2) {
  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1.length === arr2.length) {
    if (sum1 > sum2) {
      return 1;
    } else if (sum2 > sum1) {
      return -1;
    }
    return 0;
  }

  return arr1.length > arr2.length ? 1 : -1;
}
