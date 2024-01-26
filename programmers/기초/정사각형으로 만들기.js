// 정사각형으로 만들기
function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;

  if (row > col) {
    let d = Array(row - col).fill(0);
    return arr.map((a) => [...a, ...d]);
  }

  if (col > row) {
    for (let i = 0; i < col - row; i++) {
      let d = Array(col).fill(0);
      arr.push(d);
    }
  }

  return arr;
}
