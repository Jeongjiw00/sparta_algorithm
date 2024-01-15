// 조건에 맞게 수열 변환하기 1
// numrr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return

function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && num % 2 === 0) return Math.floor(num / 2);
    if (num < 50 && num % 2 === 1) return num * 2;
    return num;
  });
}
