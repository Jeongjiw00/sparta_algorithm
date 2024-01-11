// 첫 번째로 나오는 음수
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return

function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}

// findIndex 사용
const solution2 = (num_list) => num_list.findIndex((v) => v < 0);
