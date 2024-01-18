// 접미사 배열
// my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return

// substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
function solution2(my_string) {
  let result = [];
  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.substr(i, my_string.length));
  }
  return result.sort();
}

// substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
function solution(my_string) {
  let result = [];
  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.substring(i, my_string.length));
  }
  return result.sort();
}
