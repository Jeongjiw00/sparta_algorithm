// 문자열 정수의 합
function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + Number(cur), 0);
}
