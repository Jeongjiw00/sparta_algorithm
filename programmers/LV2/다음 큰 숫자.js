// 다음 큰 숫자
function solution(n) {
  const count_n = n
    .toString(2)
    .split("")
    .filter((num) => num === "1").length;

  for (let i = n + 1; n <= 1000000; i++) {
    const count_next = i
      .toString(2)
      .split("")
      .filter((num) => num === "1").length;

    if (count_n === count_next) {
      return Number(i.toString(10));
    }
  }
}
