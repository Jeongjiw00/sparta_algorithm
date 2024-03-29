// 전국 대회 선발 고사
// 각 학생들의 선발 고사 등수를 담은 정수 배열 rank와 전국 대회 참여 가능 여부가 담긴 boolean 배열 attendance가 매개변수로 주어집니다.
// 전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 10000 × a + 100 × b + c를 return
function solution(rank, attendance) {
  let answer = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) answer.push(rank[i]);
  }

  answer.sort((a, b) => a - b);

  return (
    10000 * rank.indexOf(answer[0]) +
    100 * rank.indexOf(answer[1]) +
    rank.indexOf(answer[2])
  );
}

// 간단
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);

  return 10000 * a[1] + 100 * b[1] + c[1];
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
