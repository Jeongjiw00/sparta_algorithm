// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return

function cal(a, b, c, d) {
  let d1 = (a[1] - b[1]) / (a[0] - b[0]);
  let d2 = (c[1] - d[1]) / (c[0] - d[0]);

  if (d1 === d2) {
    return 1;
  }
}

function solution(dots) {
  // 1-2, 3-4
  let result1 = cal(dots[0], dots[1], dots[2], dots[3]);

  // 2-3, 1-4
  let result2 = cal(dots[1], dots[2], dots[0], dots[3]);

  // 1-3, 2-4
  let result3 = cal(dots[0], dots[2], dots[1], dots[3]);

  if (result1 === 1 || result2 === 1 || result3 === 1) {
    return 1;
  } else {
    return 0;
  }
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1
// console.log(
//   solution([
//     [3, 5],
//     [4, 1],
//     [2, 4],
//     [5, 10],
//   ])
// ); // 0
