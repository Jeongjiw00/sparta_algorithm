function solution(quiz) {
  let answer = [];
  let replaced_quiz;

  for (let i = 0; i < quiz.length; i++) {
    replaced_quiz = quiz[i].replace("=", "===");
    if (eval(replaced_quiz)) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  return answer;
}

//split()사용---------------------------------------------------------------------------
// function solution(quiz) {
//   let result = [];

//   for (let i = 0; i < quiz.length; i++) {
//     let a = eval(quiz[i].split("=")[0]);

//     let b = quiz[i].split("=")[1] / 1; //젤 앞의 빈문자열이 생겨서 나누기 해주는 듯 
//     console.log(b);

//     if (a === b) {
//       result.push("O");
//     } else {
//       result.push("X");
//     }
//   }

//   return result;
// }

console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
