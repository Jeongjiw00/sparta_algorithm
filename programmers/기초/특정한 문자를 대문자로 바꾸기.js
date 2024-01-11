// 특정한 문자를 대문자로 바꾸기
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return

function solution(my_string, alp) {
  let result = "";
  for (let i of my_string) {
    i === alp ? (result += i.toUpperCase()) : (result += i);
  }
  return result;
}

// replaceAll()사용
function solution2(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
