// 문자열을 시계방향으로 90도 돌려서 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  // for문 대신
  [...str].forEach((c) => console.log(c));
});
