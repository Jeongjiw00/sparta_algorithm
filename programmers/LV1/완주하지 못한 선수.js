// 완주하지 못한 선수 - 해시
// Map
// Map의 .set, .get, .has, .delete 메소드
function solution(participant, completion) {
  let answer = "";

  let map = new Map();

  for (let pc of participant) {
    map.set(pc, map.get(pc) + 1 || 1);
  }

  for (let c of completion) {
    if (map.get(c) === 1) {
      map.delete(c);
    } else {
      map.set(c, map.get(c) - 1);
    }
  }

  for (let [key, value] of map) {
    answer = key;
  }

  return answer;
}

// Object
// Object의 .keys, .values, .entries 메소드
function solution(participant, completion) {
  let answer = "";

  let obj = {};

  for (let pc of participant) {
    const val = obj[pc] ? obj[pc] + 1 : 1;
    obj[pc] = val;
  }

  for (let c of completion) {
    if (obj[c] === 1) {
      delete obj[c];
    } else {
      obj[c] = obj[c] - 1;
    }
  }

  answer = Object.keys(obj)[0];

  return answer;
}
