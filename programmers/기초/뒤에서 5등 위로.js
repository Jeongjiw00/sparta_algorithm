// 뒤에서 5등 위로
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return

function solution(num_list) {
  num_list.sort((a, b) => a - b);
  for (let i = 0; i <= 4; i++) {
    num_list.shift();
  }
  return num_list;
}

// slice사용
function solution2(num_list) {
  return num_list.sort((a, b) => a - b).splice(5);
}
