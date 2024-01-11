// 수 조작하기 1
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.

function solution(n, control) {
  for (const i of control) {
    if (i === "w") {
      n += 1;
    }
    if (i === "s") {
      n -= 1;
    }
    if (i === "d") {
      n += 10;
    }
    if (i === "a") {
      n -= 10;
    }
  }
  return n;
}
