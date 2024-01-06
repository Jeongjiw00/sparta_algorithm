//  영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return

function solution(scores) {
  // 평균
  let array = scores.map((x) => (x[0] + x[1]) / 2);
  // 내림차순 정렬
  let ordered = array.slice().sort((a, b) => b - a);

  return array.map((x) => ordered.indexOf(x) + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); //	[1, 2, 4, 3]
