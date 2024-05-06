// 기능개발
function solution(progresses, speeds) {
  let answer = [];
  let day = progresses.map((e, index) => Math.ceil((100 - e) / speeds[index]));
  let first = day[0];
  let cnt = 0;

  for (let i = 0; i < day.length; i++) {
    if (day[i] <= first) {
      cnt++;
    } else {
      first = day[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);

  return answer;
}
