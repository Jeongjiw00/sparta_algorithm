// n개 간격의 원소들
// num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return

function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i = i + n) {
    answer.push(num_list[i]);
  }

  return answer;
}
