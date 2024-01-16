// 글자 이어 붙여 문자열 만들기
// my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return
function solution(my_string, index_list) {
  let answer = "";
  for (let x of index_list) {
    answer += my_string[x];
  }
  return answer;
}
