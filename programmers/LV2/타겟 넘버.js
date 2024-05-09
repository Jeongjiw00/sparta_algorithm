// 타겟 넘버
// 재귀함수 사용
// dfs : 깊이 우선 탐색
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}
