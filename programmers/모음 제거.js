//**  모음을 제거한 문자열을 return하도록 solution 함수를 완성 */
function solution(my_string) {
  const regex = /[aeiou]/g;
  let result = my_string.replace(regex, "");

  return result;
}

console.log(solution("bus"));

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
