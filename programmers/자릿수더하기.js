//**정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요 */

function solution(n) {
  let answer = 0;

  for (let i = 0; i < String(n).length; i++) {
    answer += Number(String(n)[i]);
  }
  return answer;
}

console.log(solution(789));
