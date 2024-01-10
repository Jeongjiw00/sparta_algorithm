// 카운트 다운
// start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return

function solution(start, end_num) {
  let answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}
