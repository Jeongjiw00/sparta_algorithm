// 할인 행사
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length; i++) {
    let list = discount.slice(i, i + 10);

    if (list.length !== 10) {
      break;
    }

    let bool = true;

    // 사고 싶은 갯수와 동일한지 검증
    want.forEach((e, index) => {
      let count = 0;

      list.forEach((ele) => {
        if (e == ele) {
          count += 1;
        }
      });

      if (count !== number[index]) {
        bool = false;
        return;
      }
    });

    if (bool) {
      answer += 1;
    }
  }

  return answer;
}

function solution2(want, number, discount) {
  let answer = 0;

  const isMatch = (discount) => {
    const wantMap = new Map();
    discount.forEach((v) => wantMap.set(v, (wantMap.get(v) || 0) + 1));
    for (let i = 0; i < want.length; i++) {
      if (wantMap.get(want[i]) !== number[i]) return false;
    }
    return true;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    const sliced = discount.slice(i, i + 10);
    if (isMatch(sliced)) answer++;
  }
  return answer;
}
