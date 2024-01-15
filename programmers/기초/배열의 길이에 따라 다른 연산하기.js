// 배열의 길이에 따라 다른 연산하기
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을,
// arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return

function solution(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((a, i) => (i % 2 !== 0 ? a + n : a));
  }
  return arr.map((a, i) => (i % 2 === 0 ? a + n : a));
}

const solution2 = (arr, n) =>
  arr.map((a, i) => (arr.length % 2 !== i % 2 ? a + n : a));
