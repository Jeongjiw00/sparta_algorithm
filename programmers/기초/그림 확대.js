// 그림 확대
function solution(picture, k) {
  let answer = [];
  picture.forEach((picstr) => {
    let repeat = [...picstr].map((str) => str.repeat(k)).join("");
    for (let i = 0; i < k; i++) {
      answer.push(repeat);
    }
  });
  return answer;
}
