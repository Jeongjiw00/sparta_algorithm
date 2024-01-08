//  "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return

function solution(babbling) {
  let answer = 0;
  let possible = ["aya", "ye", "woo", "ma"];

  for (let i in babbling) {
    let word = babbling[i];

    for (let j in possible) {
      if (babbling[i].includes(possible[j])) {
        // 아예 빼버리면 "wyeoo"같은 경우가 가능한 경우가 되어버림 그래서 띄어쓰기로
        word = word.replace(possible[j], " ");
      }
    }

    let split = word.split(" ");
    let yes = true;

    for (let k of split) {
      if (k !== "") {
        yes = false;
      }
    }

    if (yes) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
