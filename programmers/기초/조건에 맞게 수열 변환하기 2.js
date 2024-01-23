//조건에 맞게 수열 변환하기 2
// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
// 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 return
function solution(arr) {
  let idx = 0;
  let array1 = arr;
  while (true) {
    const array2 = array1.map((a) => {
      if (a >= 50 && a % 2 === 0) return a / 2;
      if (a < 50 && a % 2 === 1) return a * 2 + 1;
      return a;
    });
    const same = array1.every((a, i) => a === array2[i]);
    if (same) break;
    idx += 1;

    array1 = array2;
  }

  return idx;
}
