//날짜 비교하기
//date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution
function solution(date1, date2) {
  for (let i = 0; i <= 2; i++) {
    if (date1[i] < date2[i]) return 1;
    if (date1[i] > date2[i]) return 0;
  }
  return 0;
}

console.log(solution([2022, 1, 1], [2021, 12, 31]));
