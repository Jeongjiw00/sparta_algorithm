// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return

function solution(box, n) {
  // 가로
  let width = Math.floor(box[0] / n);
  // 세로
  let length = Math.floor(box[1] / n);
  // 높이
  let height = Math.floor(box[2] / n);

  return width * length * height;
}

console.log(solution([10, 8, 6], 3) === 12);
