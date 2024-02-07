// 가장 가까운 같은 글자
function solution(s) {
  let box = [];
  let answer = [];

  [...s].forEach((str) => {
    if (!box.includes(str)) {
      answer.push(-1);
    } else {
      answer.push(box.length - box.lastIndexOf(str));
    }

    box.push(str);
  });

  return answer;
}
