// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return

function solution(my_string) {
  let answer = 0;
  let array = my_string.split(" ");

  for (let i = 0; i < array.length / 2; i++) {
    console.log(array[2 * i - 1]);
    if ((array[2 * i - 1] === "+") | (array[2 * i - 1] === undefined)) {
      answer += Number(array[2 * i]);
    } else {
      answer -= Number(array[2 * i]);
    }
  }

  return answer;
}

console.log(solution("3 + 4"));
