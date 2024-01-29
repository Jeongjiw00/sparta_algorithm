// 콜라츠 추측
function solution(num) {
  for (let count = 0; count <= 500; count++) {
    if (num === 1) return count;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    if (count === 500) return -1;
  }
}
