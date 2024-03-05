// 모의고사
function solution(answers) {
  let answer = [];
  let score = [0, 0, 0];
  const array = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === array[j][i % array[j].length]) {
        score[j]++;
      }
    }
  }

  let max = Math.max(score[0], score[1], score[2]);

  if (max === score[0]) {
    answer.push(1);
  }
  if (max === score[1]) {
    answer.push(2);
  }
  if (max === score[2]) {
    answer.push(3);
  }

  return answer;
}
