// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return
let string = "";

function solution(i, j, k) {
  for (let num = i; num <= j; num++) {
    string += String(num);
  }

  return string.split("").filter((x) => x === String(k)).length;
}

console.log(solution(1, 13, 1));
