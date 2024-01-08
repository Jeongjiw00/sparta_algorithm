// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return

let array = [];
let answer;
function solution(num, k) {
  // 숫자를 문자열로 바꾸기
  let to_string = String(num);

  // 배열로 만들기
  for (let number of to_string) {
    array.push(number);
  }

  // 배열에서 존재하는지 확인 & 인덱스 확인
  answer = array.indexOf(String(k));

  if (answer === -1) {
    return answer;
  }

  return answer + 1;
}

console.log(solution(29183, 1) === 3);
console.log(solution(123456, 7) === -1);
