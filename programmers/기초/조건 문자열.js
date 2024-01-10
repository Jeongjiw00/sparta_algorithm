// 조건 문자열
// n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return

function solution(ineq, eq, n, m) {
  if (ineq === ">") {
    return eq === "=" ? (n >= m ? 1 : 0) : n > m ? 1 : 0;
  }
  if (ineq === "<") {
    return eq === "=" ? (n <= m ? 1 : 0) : n < m ? 1 : 0;
  }
}
