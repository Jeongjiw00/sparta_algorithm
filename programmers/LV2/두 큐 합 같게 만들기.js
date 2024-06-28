// 두 큐 합 같게 만들기
function solution(queue1, queue2) {
  let answer = 0;
  const queue = [...queue1, ...queue2];
  const len = queue1.length;
  let q1 = 0;
  let q2 = len;
  const sum = queue1.reduce((sum, cur) => {
    return sum + cur;
  });
  const goal =
    queue.reduce((sum, cur) => {
      return sum + cur;
    }) / 2;

  for (let i = 0; i < len * 3; i++) {
    if (sum == goal) {
      return answer;
    }
    if (sum < goal) {
      sum += queue[q2];
      q2++;
    } else if (sum > goal) {
      sum -= queue[q1];
      q1++;
    }
    answer++;
  }
  return -1;
}
