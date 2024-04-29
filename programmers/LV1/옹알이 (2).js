// 옹알이 (2)
function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(" ");
    }

    if (babble.split(" ").join("").length === 0) {
      count += 1;
    }
  }

  return count;
}

//  정규표현식
function solution(babbling) {
  const r1 = /(aya|ye|woo|ma)\1/;
  const r2 = /^(aya|ye|woo|ma)+$/;
  let answer = 0;
  for (const b of babbling) {
    const m = r1.exec(b);
    if (m) continue;

    const m2 = r2.exec(b);
    if (!m2) continue;

    answer++;
  }

  return answer;
}
