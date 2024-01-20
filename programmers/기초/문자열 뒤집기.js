// 문자열 뒤집기
function solution(my_string, s, e) {
  const array = [...my_string];
  const reverse = array.slice(s, e + 1).reverse();
  array.splice(s, reverse.length, reverse);
  return array.flat().join("");
}
