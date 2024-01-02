// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return

function solution(my_string) {
  let array = [];
  let answer = "";
  let new_string = my_string.toLowerCase();

  for (let alpha of new_string) {
    array.push(alpha);
  }

  // 정렬
  array.sort();

  array.map((alpha) => (answer += alpha));

  return answer;
}

console.log(solution("Python"));
