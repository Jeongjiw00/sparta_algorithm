// 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return

function solution(age) {
  let answer = "";
  let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  let age_string = String(age);

  for (let i = 0; i < age_string.length; i++) {
    let index = age_string[i];

    answer += array[index];
  }
  return answer;
}

console.log(solution(23));
