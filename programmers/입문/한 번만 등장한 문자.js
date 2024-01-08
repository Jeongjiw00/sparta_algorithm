// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return

function solution(s) {
  let set = new Set();
  let array = s.split("");
  let answer_array = [];
  let cnt;

  // 문자열 안의 알파벳 모음
  for (let alpha of array) {
    set.add(alpha);
  }

  // // 비교 - 프로그래머스의 노드버전이 하위버전이라 findLastIndex가 없어 컴파일 에러가 남
  // for (let a of set) {
  //   if (
  //     array.findIndex((x) => x === a) === array.findLastIndex((x) => x === a)
  //   ) {
  //     answer_array.push(a);
  //   }
  // }

  // 비교
  for (let a of set) {
    cnt = 0;
    for (let b of array) {
      if (a === b) {
        cnt += 1;
      }
    }
    if (cnt === 1) {
      answer_array.push(a);
    }
  }

  return answer_array.sort().join("");
}

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); //	"eho"
