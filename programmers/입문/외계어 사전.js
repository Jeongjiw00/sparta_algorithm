// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return

function solutions(spell, dic) {
  for (let i of dic) {
    let set = new Set();
    let array = [];
    let type = true;

    // 사전에 있는 단어들에 사용된 단어들을 각각 단어마다 배열로 만듦
    for (let j = 0; j < i.length; j++) {
      set.add(i[j]);
    }

    // 사용된 단어의 개수가 같은 것들만 판별
    if ([...set].length === spell.length) {
      for (let k of spell) {
        if (![...set].includes(k)) {
          array.push(false);
        } else {
          array.push(true);
        }
      }

      // 사용안되는 단어가 있을 경우 걸리도록
      if (array.includes(false)) {
        type = false;
        array = [];
      }

      // 통과한 경우
      if (type) return 1;
    }
  }

  // 끝까지 통과 못한 경우
  return 2;
}

// some 사용으로 간단하게
function solution(p, d) {
  // some - 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
  return d.some((s) => p.sort().toString() === [...s].sort().toString())
    ? 1
    : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
