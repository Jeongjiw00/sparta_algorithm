// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return

function solution(dots) {
  let m, n;
  let x = dots[0][0];
  let y = dots[0][1];

  for (let i = 1; i < dots.length; i++) {
    if (dots[i][0] !== x) {
      m = Math.abs(x - dots[i][0]);
    }
    if (dots[i][1] !== y) {
      n = Math.abs(y - dots[i][1]);
    }
  }

  return m * n;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); //1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); //1
