//2의 영역
function solution(arr) {
  const first = arr.findIndex((a) => a === 2);
  if (first === -1) {
    return [-1];
  }
  console.log(first);
  const last = arr.lastIndexOf(2);
  if (!last) {
    return [2];
  }

  return arr.slice(first, last + 1);
}

// 간단히
function solution2(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}
