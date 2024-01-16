// 9로 나눈 나머지
// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은

// 반복문을 사용하지 않고 각 자리 숫자의 합을 구한 뒤 나머지를 구해주기
function solution(number) {
  return [...number].reduce((acc, cur) => acc + Number(cur), 0) % 9;
}
