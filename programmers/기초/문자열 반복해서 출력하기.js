// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

"string 5";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});

// function solution(params) {
//   input = params.split(" ");

//   str = input[0];
//   n = Number(input[1]);

//   let count = 0;
//   let output = "";

//   while (count !== n) {
//     output += str;
//     count++;
//   }

//   return output;
// }

// console.log(solution("string 5"));
