// 2016년
function solution(a, b) {
  // 2016년 윤년 366일
  const weekToDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const leapYearMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 1월 1일 FRI
  let day = b + 4;
  for (let i = 0; i < a - 1; ++i) {
    day += leapYearMonths[i];
  }
  return weekToDay[day % 7];
}

function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
