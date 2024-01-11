// 할 일 목록
// todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return

function solution(todo_list, finished) {
  let answer = [];
  for (let i = 0; i < finished.length; i++) {
    if (finished[i] === false) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}
