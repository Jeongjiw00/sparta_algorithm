// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0]; // aBcDeFg
  let array = [...str];
  let result = array.map((a) => {
    // 아스키코드로 소문자인지 판별, 소문자의 아스키코드 범위는 a(97)부터 z(122)까지
    const alpha = a.charCodeAt();
    if (alpha >= 97) return a.toUpperCase();
    return a.toLowerCase();
  });

  console.log(result.join(""));
});

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = [line];
// }).on("close", function () {
//   str = input[0]; // aBcDeFg
//   let array = [...str];
//   let result = array.map((a) => {
//     // 정규식과 match() 사용하여 소문자인지 판별
//     if (a.match(new RegExp(/^[a-z]/))) return a.toUpperCase();
//     return a.toLowerCase();
//   });

//   console.log(result.join(""));
// });
