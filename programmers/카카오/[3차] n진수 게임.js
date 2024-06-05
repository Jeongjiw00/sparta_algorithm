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

function solution2(n, t, m, p) {
  let answer = [];
  let num = 0;
  let checkNum;
  let count = 0;
  let order = 1;
  while (true) {
    if (count === t) return answer.join("").toUpperCase();
    checkNum = num.toString(n).split("");
    for (let i = 0; i < checkNum.length; i++) {
      if (p === m) p = 0;
      else if (order % m === p) {
        answer.push(checkNum[i]);
        count++;
        if (count === t) break;
      }
      order++;
    }
    num++;
  }
}
