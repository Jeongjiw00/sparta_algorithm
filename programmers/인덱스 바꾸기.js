// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return

let array = [];
let new_string = "";

function solution(my_string, num1, num2) {
  for (alpha of my_string) {
    array.push(alpha);
  }

  let a = array[num1];
  let b = array[num2];

  array[num1] = b;
  array[num2] = a;

  for (alpha2 of array) {
    new_string += alpha2;
  }

  return new_string;
}

console.log(solution("hello", 1, 2));
