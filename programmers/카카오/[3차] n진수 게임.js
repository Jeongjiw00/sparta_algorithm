// [3차] n진수 게임
function solution(n, t, m, p) {
  let answer = "";

  p = p == m ? 0 : p;
  let cnt = 0;
  let total = "";
  let num = 0;

  while (total.length < m * t) {
    total += num.toString(n);
    num++;
  }

  for (let i = 0; i < total.length; i++) {
    if (cnt == t) break;

    if ((i + 1) % m == p) {
      answer += total[i].toUpperCase();
      cnt++;
    }
  }

  return answer;
}
