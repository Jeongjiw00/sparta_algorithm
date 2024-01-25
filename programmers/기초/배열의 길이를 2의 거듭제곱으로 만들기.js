//배열의 길이를 2의 거듭제곱으로 만들기
function solution(arr) {
  let cnt = 0;

  while (true) {
    if (arr.length === 2 ** cnt) break;
    if (arr.length > 2 ** cnt) cnt++;
    else {
      const diff = 2 ** cnt - arr.length;

      for (let j = 0; j < diff; j++) {
        arr.push(0);
      }
    }
  }

  return arr;
}

console.log(
  solution([1, 2, 3, 4, 5, 63, 25, 4, 3, 3, 3, 4, 5, 34, 3, 2, 3, 4, 45, 6, 4])
);
