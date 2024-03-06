// 덧칠하기
function solution(n, m, section) {
  let answer = 0;
  let range = 0;

  section.forEach((block) => {
    if (range < block) {
      answer++;
      range = block + m - 1;
    }
  });

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
