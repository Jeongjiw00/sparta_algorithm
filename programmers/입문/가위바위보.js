//** 가위는 2 바위는 0 보는 5로 표현 */
function solution(rsp) {
  let win = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") {
      win += 0;
    } else if (rsp[i] === "5") {
      win += 2;
    } else {
      win += 5;
    }
  }
  return win;
}

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  let answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}

console.log(solution("2"));
