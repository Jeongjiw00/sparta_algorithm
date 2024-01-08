// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return

function solution(num_list, n) {
  let result = [];
  for (let i = n - 1; i < num_list.length; i++) {
    result.push(num_list[i]);
  }
  return result;
}
