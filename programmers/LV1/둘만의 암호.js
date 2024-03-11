// 둘만의 암호
function solution(s, skip, index) {
  const alphabet = [];

  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  skip.split("").forEach((v) => {
    alphabet.splice(alphabet.indexOf(v), 1);
  });

  const answer = s
    .split("")
    .map((v) => {
      return alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
    })
    .join("");

  return answer;
}
